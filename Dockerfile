# Dockerfile

# 從 [Docker Hub](https://hub.docker.com/) 安裝 Node.js image。
FROM node:7.8

# 設定 container 的預設目錄位置
WORKDIR /ui

ENV NODE_ENV=production

# 將專案根目錄的檔案加入至 container
# 安裝 npm package
ADD . /ui
RUN  npm install && npm run build

# 開放 container 的 8080 port
EXPOSE 8080
CMD cd dist && npm start
