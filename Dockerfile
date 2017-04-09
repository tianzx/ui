# Dockerfile

# 從 [Docker Hub](https://hub.docker.com/) 安裝 Node.js image。
FROM node:7.7

# 設定 container 的預設目錄位置
WORKDIR /ui

#ENV NODE_ENV=develop

# 將專案根目錄的檔案加入至 container
# 安裝 npm package
ADD . /ui
RUN  export NODE_ENV=develop && npm install && npm run build

# 開放 container 的 8080 port
EXPOSE 8080
CMD export NODE_ENV=production && npm install && npm start
