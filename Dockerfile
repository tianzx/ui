
FROM node:7.8

ENV NODE_ENV=production

WORKDIR /ui

COPY  . /ui

RUN npm install

EXPOSE 8080
CMD  npm start
