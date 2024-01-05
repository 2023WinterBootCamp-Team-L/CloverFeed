# base 이미지 설정
FROM node:18.19.0-alpine3.18

# 소스 코드 복사
COPY package.json ./

# 앱 종속성 설치
RUN npm install

# 파일 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 앱 빌드
CMD ["node", "index.js"]