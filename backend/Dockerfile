FROM python:3.11.7-alpine3.19

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /backend

COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

RUN export LDFLAGS="-L/usr/local/mysql/lib"
RUN export CPPFLAGS="-I/usr/local/mysql/include"
RUN pip install mysqlclient

COPY . /backend

CMD ["sh", "-c", "python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000"]