# Dockerfile

# 從 [Docker Hub](https://hub.docker.com/) 安裝 Node.js image。
FROM node:6.10.0

# 設定 container 的預設目錄位置
WORKDIR /ui

#ENV NODE_ENV=develop

# 將專案根目錄的檔案加入至 container
# 安裝 npm package
# dev 处于编译状态
ADD . /ui
RUN  pwd && export NODE_ENV=develop && npm install && npm run build

# 開放 container 的 8080 port
# prod 处于正式上线态
EXPOSE 8080
CMD pwd && export NODE_ENV=production && npm install && npm start
