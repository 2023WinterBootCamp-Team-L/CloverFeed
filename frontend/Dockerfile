# base 이미지 설정
FROM node:18.19.0-alpine3.18

WORKDIR /app

# 소스 코드 복사
COPY package.json package-lock.json ./
    
# 앱 종속성 설치
RUN npm ci

# 파일 복사
COPY . .

# 포트 노출
EXPOSE 5173

# 앱 빌드
ENTRYPOINT ["yarn", "dev"]
