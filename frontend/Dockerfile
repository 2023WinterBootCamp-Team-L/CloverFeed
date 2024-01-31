# base 이미지 설정
FROM node:18.19.0-alpine3.18

WORKDIR /app

# 소스 코드 복사
COPY . /frontend
COPY package.json yarn.lock ./

# 앱 종속성 설치
RUN yarn install
RUN yarn

# 파일 복사
COPY . .

# 포트 노출
EXPOSE 5173

# 앱 빌드
# TypeScript 컴파일 경고 무시하고 빌드
RUN yarn build
ENTRYPOINT ["yarn", "dev"]