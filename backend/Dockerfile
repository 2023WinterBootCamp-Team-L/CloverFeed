FROM python:3.11.7

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /backend

RUN apt-get install pkg-config

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

RUN export MYSQLCLIENT_LDFLAGS=$(pkg-config --libs mysqlclient)
RUN export MYSQLCLIENT_CFLAGS=$(pkg-config --cflags mysqlclient)

COPY . /backend

CMD ["sh", "-c", "python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000"]