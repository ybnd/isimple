import tkinter as tk
from collections import namedtuple
from PIL import Image, ImageTk
import numpy as np
import cv2
import time

from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.figure import Figure

import asyncio
import threading

__coo__ = namedtuple('Coordinate', 'x y')
__ratio__ = 0.5

class ScriptWindow(tk.Tk):
    def __init__(self):
        tk.Tk.__init__(self)


class ReshapeSelection:
    def __init__(self, canvas, transform):
        self.canvas = canvas
        self.transform = transform

        self.canvas.bind("<Button-1>", self.press)
        self.canvas.bind("<ButtonRelease-1>", self.release)
        self.canvas.master.bind("<Control-z>", self.undo)
        self.canvas.master.bind("<Escape>", self.quit)

        self.initialized = False
        self.has_rectangle = False

        self.lines = []

    def undo(self, event):
        self.initialized = False
        self.has_rectangle = False
        for button in self.corners: button.delete()
        for line in self.lines: self.canvas.delete(line)


    def press(self, event):

        if not self.initialized:
            self.start = __coo__(x = event.x, y = event.y)
            self.initialized = True

    def release(self, event):
        if not self.has_rectangle:
            self.stop = __coo__(x=event.x, y=event.y)

            self.coordinates = [
                __coo__(self.start.x, self.start.y), # todo: this thing practically begs to be done in a short, sweet, sugary way!
                __coo__(self.start.x, self.stop.y),
                __coo__(self.stop.x, self.stop.y),
                __coo__(self.stop.x, self.start.y)
            ]

            self.corners = []

            for coordinate in self.coordinates:
                self.corners.append(
                    Corner(self, coordinate)
                )

            self.has_rectangle = True
            self.update()

    def update(self):
        self.redraw()
        co = [corner.co for corner in self.corners]
        # print(f"Coordinates: {co}")
        self.transform.update(co)

    def redraw(self):
        for line in self.lines:
            self.canvas.delete(line)

        for i, corner in enumerate(self.corners):
            self.lines.append(self.canvas.create_line(self.corners[i-1].co, corner.co))

        for corner in self.corners:
            self.canvas.lift(corner)

    def quit(self, _):
        self.canvas.master.destroy()


class Corner:
    __side__ = 35
    handle = None
    alpha = 0.05

    def __init__(self, selection, co, r = None):
        if r is None:
            r = self.__side__

        self.canvas = selection.canvas
        self.selection = selection
        self.co = co
        # self.id = self.canvas.create_oval(co.x-r, co.y-r, co.x+r, co.y+r, fill = 'LightGray')
        if self.handle is None:
            pim = Image.new('RGBA', (self.__side__, self.__side__), (255, 0, 0, int(self.alpha * 255)))
            self.handle = ImageTk.PhotoImage(image=pim)

        self.id = self.canvas.create_image(co.x, co.y, image = self.handle, anchor ='center')

        self.canvas.tag_bind(self.id, "<ButtonPress-1>", self.press)
        self.canvas.tag_bind(self.id, "<ButtonRelease-1>", self.release)
        self.canvas.tag_bind(self.id, "<Enter>", self.enter)
        self.canvas.tag_bind(self.id, "<Leave>", self.leave)

        self.dragging = False

    def press(self, event):
        self.previous = __coo__(event.x, event.y)
        self.drag_binding = self.canvas.bind("<Motion>", self.drag)
        self.dragging = True

    def drag(self, event):
        self.canvas.move(self.id, event.x - self.previous.x, event.y - self.previous.y)
        co = self.canvas.coords(self.id)
        self.co = __coo__(co[0], co[1])
        # self.co = __coo__((co[0] + co[2]) / 2, (co[1] + co[3]) / 2)
        self.selection.update()
        self.previous = self.co


    def release(self, event):
        self.canvas.unbind("<Motion>", self.drag_binding)
        co = self.canvas.coords(self.id)
        self.co = __coo__(co[0], co[1])
        # self.co = __coo__((co[0]+co[2])/2, (co[1]+co[3])/2)
        self.selection.update()
        self.leave(event)
        self.dragging = False

    def delete(self):
        self.canvas.delete(self.id)

    def enter(self, event):
        self.canvas.configure(cursor = 'hand2')

    def leave(self, event):
        if not self.dragging:
            self.canvas.configure(cursor = 'left_ptr')


class ImageDisplay:
    __ratio__ = __ratio__
    def __init__(self, window: ScriptWindow, image: np.ndarray, overlay: np.ndarray):
        self.window = window # todo: some of this should actually be in an 'app' or 'window' object
        self.shape = image.shape
        self.canvas = tk.Canvas(
            self.window,
            width = int(self.shape[1]*self.__ratio__) + overlay.shape[1]*self.__ratio__,
            height = int(self.shape[0]*self.__ratio__)
        )
        self.canvas.pack()
        self.scaled_shape = (int(self.shape[1]*self.__ratio__), int(self.shape[0]*self.__ratio__))

        self.image = image
        height, width, channels = image.shape
        img = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        img.thumbnail((int(width * self.__ratio__), int(height * self.__ratio__)))
        img = ImageTk.PhotoImage(image=img)
        self.canvas.create_image(0, 0, image=img, anchor=tk.NW) # todo: image disappears for some reason?

        self.transform = TransformImage(
            self.canvas,
            self.image,
            overlay,
            self.scaled_shape,
            self.window.transform_callback
        )
        self.selection = ReshapeSelection(
            self.canvas,
            self.transform
        )

        self.canvas.mainloop()


class TransformImage:
    coordinates = np.float32([[200,200],[300,200],[200,300],[300,300]]) # todo: this should be ~ the shape of the overlay
    __ratio__ =__ratio__
    alpha = 0.1

    def __init__(self, canvas, image, overlay_img, co, callback):
        self.overlay = overlay_img
        self.original = image
        self.image = None
        self.canvas = canvas
        self.callback = callback

        shape = self.overlay.shape

        self.co = co
        self.height = co[1]
        self.width = int(shape[0] * co[1] / shape[1])

        self.to_coordinates = np.array( # selection rectangle: bottom left to top right
            [
                [0, shape[0]], [0, 0], [shape[1], 0], [shape[1], shape[0]]
            ]
        )

        self.show_overlay()

    def update(self, from_coordinates):
        self.transform = cv2.getPerspectiveTransform(
            np.float32(from_coordinates)/self.__ratio__,
            np.float32(self.to_coordinates)
        )
        Y,X,C = self.overlay.shape
        self.image = cv2.warpPerspective(self.original, self.transform, (X,Y))

        cv2.addWeighted(self.overlay, self.alpha, self.image, 1-self.alpha, 0, self.image)

        height, width, channels = self.overlay.shape
        img = cv2.cvtColor(self.image, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        img.thumbnail((int(width * self.__ratio__), int(height * self.__ratio__)))
        self.img = ImageTk.PhotoImage(image=img)
        self.canvas.create_image(self.co[0], 0, image=self.img, anchor=tk.NW)

        self.callback(self.transform)

    def show_overlay(self):
        height, width, channels = self.overlay.shape
        img = cv2.cvtColor(self.overlay, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(img)
        img.thumbnail((int(width * self.__ratio__), int(height * self.__ratio__)))
        img = ImageTk.PhotoImage(image=img)
        self.canvas.create_image(self.co[0], 0, image=img, anchor=tk.NW)

def hsvimg2tk(image, ratio = 1.0):
    img = cv2.cvtColor(image, cv2.COLOR_HSV2RGB)
    shape = img.shape
    img = Image.fromarray(img)
    img.thumbnail(
        (int(shape[1] * ratio), int(shape[0] * ratio))
    )
    img =  ImageTk.PhotoImage(image = img)
    return img

def binimg2tk(image, ratio = 1.0):
    img = cv2.cvtColor(image, cv2.COLOR_GRAY2RGB)
    shape = img.shape
    img = Image.fromarray(img)
    img.thumbnail(
        (int(shape[1] * ratio), int(shape[0] * ratio))
    )
    img = ImageTk.PhotoImage(image=img)
    return img


class ColorPicker:
    __w_spacing__ = 3
    __h_scale__ = 25

    def __init__(self, window, mask, video):
        self.window = window
        self.mask = mask
        self.video = video

        self.coo = None

        image = self.mask.mask(self.video.get_frame())

        self.canvas = tk.Canvas(
            self.window,
            width = image.shape[1] * 2 + self.__w_spacing__,
            height = image.shape[0]
        )
        self.slider = tk.Scale(
            self.window,
            from_ = 1,
            to = self.video.frameN,
            orient = tk.HORIZONTAL,
            command = self.track,
            length = image.shape[1] * 2 + self.__w_spacing__,
            width = self.__h_scale__
        )
        self.canvas.pack()
        self.slider.pack()

        self.center = image.shape[1]

        self.canvas.bind("<Button-1>", self.pick)
        self.canvas.master.bind("<Escape>", self.quit)

        self.update()
        self.canvas.mainloop()

    def update(self):
        mask, filter = self.mask.get_images()

        self.im_mask = hsvimg2tk(mask)
        self.im_filter = binimg2tk(filter)

        self.canvas.create_image(
            0, 0,
            image=self.im_mask, anchor=tk.NW
        )
        self.canvas.create_image(
            self.center + self.__w_spacing__, 0,
            image = self.im_filter, anchor = tk.NW
        )

    def pick(self, event):
        self.coo = __coo__(x = event.x, y = event.y)
        self.mask.pick(self.coo)
        self.update()


    def track(self, value):
        self.mask.track(int(value))
        self.update()

    def quit(self, _):
        self.window.destroy()


class OverlayAlignWindow(ScriptWindow):
    __default_frame__ = 0.5

    def __init__(self, video):
        ScriptWindow.__init__(self)
        self.data = video

        self.image = ImageDisplay(
            self,
            self.data.get_frame_at(self.__default_frame__, do_warp = False, to_hsv = False),
            self.data.overlay
        )

    def transform_callback(self, transform): # todo: not type safe!
        self.data.transform = transform
        pass

class MaskFilterWindow(ScriptWindow):
    def __init__(self, mask):
        ScriptWindow.__init__(self)
        self.data = mask

        self.picker = ColorPicker(
            self,
            mask = mask,
            video = mask.video
        )

    def selection_callback(self, selection):
        pass

class ProgressWindow(ScriptWindow):
    __ratio__ = 0.35
    __w_spacing__ = 3

    def __init__(self, video):
        ScriptWindow.__init__(self)
        self.video = video

        frame = self.video.get_frame(1)
        self.size = frame.shape

        self.canvas = tk.Canvas(
            self,
            width = int(self.size[1] * self.__ratio__)*2 + self.__w_spacing__,
            height = int(self.size[0] * self.__ratio__)
        )
        self.update_image()
        self.canvas.pack()

        self.fig = Figure(
            figsize = (9,6)
        )
        self.ax = self.fig.add_subplot(111)

        self.figcanvas = FigureCanvasTkAgg(self.fig, master = self)
        self.figcanvas.draw()
        self.figcanvas.get_tk_widget().pack()

    def update_image(self):
        self.img = hsvimg2tk(self.video.frame, ratio=self.__ratio__)
        self.state = hsvimg2tk(self.video.get_state_image(), ratio = self.__ratio__)
        self.canvas.create_image(
            0, 0, image=self.img, anchor=tk.NW
        )

        self.canvas.create_image(
            int(self.size[1] * self.__ratio__) + self.__w_spacing__, 0,
            image = self.state, anchor = tk.NW
        )

    def update(self):
        self.update_image()

        self.figcanvas.draw()
        ScriptWindow.update(self)

    def plot(self, t, areas):
        self.ax.clear()
        areas = np.transpose(areas)
        for i, curve in enumerate(areas):
            color = cv2.cvtColor(
                np.array([[np.array(self.video.colors[self.video.masks[i]], dtype = np.uint8)]]),
                cv2.COLOR_HSV2RGB
            )[0,0] / 255
            self.ax.plot(
                t, curve / (400 / 25.4)**2 * 0.153,
                label = self.video.masks[i].name,
                color = tuple(color)
            )

        self.ax.legend()
        self.ax.set_title('Image processing - volume measurement')
        self.ax.set_ylabel('Volume (uL)')
        self.ax.set_xlabel('Time (s)')
        self.ax.set_xlim(0, self.video.frameN / self.video.fps)

    def keepopen(self):
        self.mainloop()





