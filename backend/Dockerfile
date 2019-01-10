FROM python:3.7

ENV PYTHONUNBUFFERED 1W
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip3.7 install -r requirements.txt
ADD . /code/