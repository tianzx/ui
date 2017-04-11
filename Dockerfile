
# Dockerfile

# 從 [Docker Hub](https://hub.docker.com/) 安裝 Node.js image。
FROM node:7.8

RUN mkdir -p /bin
# 設定 container 的預設目錄位置
WORKDIR /bin

#ENV NODE_ENV=develop

# 將專案根目錄的檔案加入至 container
# 安裝 npm package
# dev 处于编译状态
RUN   export NODE_ENV=develop && npm install rimraf -g && npm install && npm run build
COPY  dist/ /bin/
RUN ls -la /bin/*

# cd /ui
#&& npm install && npm run build && cd /ui/dist
#&& export NODE_ENV=production && npm install

# 開放 container 的 8080 port
# prod 处于正式上线态
EXPOSE 8080
CMD npm start

