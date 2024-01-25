FROM python:3.11.7

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY . /backend
WORKDIR /backend

ENV JAVA_HOME /usr/lib/jvm/java-1.7-openjdk/jre

# 패키지 업데이트 및 설치
RUN apt-get update && apt-get install -y pkg-config
RUN apt-get update && apt-get install -y g++ default-jdk

# requirements.txt 복사 및 의존성 설치
COPY requirements.txt .
RUN pip install --upgrade pip
RUN pip install -r requirements.txt --no-cache-dir

# MySQL 클라이언트 라이브러리 관련 환경 변수 설정
RUN export MYSQLCLIENT_LDFLAGS=$(pkg-config --libs mysqlclient)
RUN export MYSQLCLIENT_CFLAGS=$(pkg-config --cflags mysqlclient)

CMD ["sh", "-c", "python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver 0.0.0.0:8000"]
# RUN apt-get update && apt-get install -y python3-pip libffi-dev python3-dev && apt-get install -y default-libmysqlclient-dev && apt-get install -y default-jdk