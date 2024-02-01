FROM python:3.11.7

# 환경 변수 설정
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV JAVA_HOME /usr/lib/jvm/java-1.7-openjdk/jre

# 패키지 업데이트 및 설치
RUN apt-get update && apt-get install -y pkg-config g++ default-jdk net-tools dnsutils

# 작업 디렉토리 설정
COPY . /backend
WORKDIR /backend

# requirements.txt 복사 및 의존성 설치
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt --no-cache-dir

# MySQL 클라이언트 라이브러리 관련 환경 변수 설정
RUN export MYSQLCLIENT_LDFLAGS=$(pkg-config --libs mysqlclient)
RUN export MYSQLCLIENT_CFLAGS=$(pkg-config --cflags mysqlclient)

# ENV MYSQLCLIENT_LDFLAGS="-L/usr/lib/$(dpkg-architecture -qDEB_HOST_MULTIARCH) -lmysqlclient -lpthread -lz -lm -ldl"
# ENV MYSQLCLIENT_CFLAGS="-I/usr/include/mysql"
# RUN apt-get install -y libmysqlclient-dev

# CMD 설정
COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

CMD /usr/wait-for-it.sh db:3306 -- python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000
# CMD ["sh", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
# RUN python manage.py migrate