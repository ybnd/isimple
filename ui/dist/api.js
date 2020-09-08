import axios from "axios";
export { axios };

export function api() {
  return "/api/" + Array.from(arguments).join("/");
}

export const AnalyzerState = {
  UNKNOWN: 0,
  INCOMPLETE: 1,
  CAN_LAUNCH: 2,
  LAUNCHED: 3,
  CACHING: 4,
  CAN_ANALYZE: 5,
  ANALYZING: 6,
  DONE: 7,
  CANCELED: 8,
  ERROR: 9,
};

export const QueueState = {
  STOPPED: 0,
  RUNNING: 1,
  PAUSED: 2,
};

export const EVENT_CATEGORIES = [
  "status",
  "config",
  "result",
  "result_metadata",
];

export const endpoints = {
  GET_INVERSE_OVERLAID_FRAME: "get_inverse_overlaid_frame",
  GET_STATE_FRAME: "get_state_frame",
  GET_FRAME: "get_frame",
  GET_OVERLAY_PNG: "get_overlay_png",
};

function return_data(response) {
  if (response.status === 200) {
    return response.data;
  }
}

function return_success(response) {
  return response.status === 200;
}

export function ping() {
  return axios
    .get(api("ping"))
    .then(return_success)
    .catch(() => {
      return false;
    });
}

export function unload() {
  // axios can't be called on page unload, use sendBeacon instead
  return navigator.sendBeacon(api("unload"));
}

export async function restart() {
  return axios.post(api("restart")).then(return_data);
}

export async function settings_schema() {
  return axios.get(api("settings_schema")).then(return_data);
}

export async function get_settings() {
  return axios.get(api("get_settings")).then(return_data);
}

export async function set_settings(settings) {
  return axios
    .post(api("set_settings"), { settings: settings })
    .then(return_data);
}

export async function get_app_state() {
  return axios.get(api("app_state")).then(return_data);
}

export async function init() {
  // initialize an Analyzer in the backend & return its id
  return axios.post(api("init")).then(return_data);
}

export async function remove(id) {
  return axios.post(api(id, "remove")).then(return_data);
}

export async function cancel(id) {
  return axios.post(api(id, "cancel")).then(return_data);
}

export async function get_schemas(id) {
  return axios.get(api(id, "call/get_schemas")).then(return_data);
}

export async function get_options(for_type) {
  return axios.get(api("options", for_type)).then(return_data);
}

export async function select_video_path() {
  return axios.get(api("select_video_path")).then(return_data);
}

export async function select_design_path() {
  return axios.get(api("select_design_path")).then(return_data);
}

export async function check_video_path(video_path) {
  return axios
    .put(api("check_video_path"), { video_path: video_path })
    .then(return_data);
}

export async function check_design_path(design_path) {
  return axios
    .put(api("check_design_path"), { design_path: design_path })
    .then(return_data);
}

export async function get_total_time(id) {
  return axios.get(api(id, "call/get_total_time")).then(return_data);
}

export async function get_config(id) {
  return axios.get(api(id, "call/get_config")).then(return_data);
}

export async function get_colors(id) {
  return axios.get(api(id, "call/get_colors")).then(return_data);
}

export async function get_state(id) {
  return axios.get(api(id, "get_state")).then(return_data);
}

export async function get_status(id) {
  return axios.get(api(id, "call/status")).then(return_data);
}

export async function get_relative_roi(id) {
  return axios.get(api(id, "call/get_relative_roi")).then(return_data);
}

export async function set_config(id, config) {
  return axios
    .post(api(id, "call/set_config"), { config: config })
    .then(return_data);
}

export async function state_transition(id) {
  return axios.post(api(id, "call/state_transition")).then(return_data);
}

export async function launch(id) {
  return axios.get(api(id, "call/can_launch")).then((response) => {
    if (response.status === 200) {
      return axios.post(api(id, "launch")).then(return_data);
    } else {
      return false;
    }
  });
}

export async function seek(id, position) {
  return axios
    .post(api(id, "call/seek"), { position: position })
    .then(return_data);
}

export async function get_seek_position(id) {
  return axios.get(api(id, "call/get_seek_position")).then(return_data);
}

export async function estimate_transform(id, roi) {
  return axios
    .post(api(id, "call/estimate_transform"), { roi: roi })
    .then(return_success);
}

export async function turn_cw(id) {
  return axios.post(api(id, "call/turn_cw")).then(return_success);
}

export async function turn_ccw(id) {
  return axios.post(api(id, "call/turn_ccw")).then(return_success);
}

export async function flip_h(id) {
  return axios.post(api(id, "call/flip_h")).then(return_success);
}

export async function flip_v(id) {
  return axios.post(api(id, "call/flip_v")).then(return_success);
}

export async function clear_roi(id) {
  return axios.post(api(id, "call/clear_roi")).then(return_success);
}

export async function undo_config(id, context = null) {
  return axios
    .put(api(id, "call/undo_config"), { context: context })
    .then(return_data);
}

export async function redo_config(id, context = null) {
  return axios
    .put(api(id, "call/redo_config"), { context: context })
    .then(return_data);
}

export async function set_filter(id, relative_coordinate) {
  return axios
    .post(api(id, "call/set_filter_click"), {
      relative_x: relative_coordinate.x,
      relative_y: relative_coordinate.y,
    })
    .then(return_data);
}

export async function commit(id) {
  return axios.post(api(id, "call/commit")).then(return_success);
}

export async function analyze(id) {
  return axios.put(api(id, "call/analyze")).then(return_success);
}

export async function get_results(id) {
  return axios.get(api(id, "call/get_results")).then(return_data);
}

export function get_log() {
  // todo: add link to where this was copied from!
  var xhr = new XMLHttpRequest();
  xhr.open("GET", api("get_log"));
  xhr.send();

  return xhr;
}

export async function stop_log() {
  return axios.put(api("stop_log")).then(return_success);
}

export async function stop_stream(id, endpoint) {
  return axios.get(api(id, "stream", endpoint, "stop")).then(return_success);
}

export function events(callback) {
  console.log(`registering EventSource for /api/stream/events`);

  let evl = new EventSource(api("stream", "events"));
  evl.onmessage = callback;

  console.log(evl);
  return evl;
}

export async function clear_cache() {
  return axios.get(api("clear-cache")).then(return_success);
}