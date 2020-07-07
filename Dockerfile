FROM python:3.8

WORKDIR /isimple

COPY . /isimple/

RUN pip install -r /isimple/requirements.txt

EXPOSE 7951

CMD [ "python", "/isimple/.server.py" ]
