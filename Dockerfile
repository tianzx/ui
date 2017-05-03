
FROM mhart/alpine-node:latest

ENV NODE_ENV=production


# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install

# Bundle app source
COPY . /usr/src/app

#VOLUME /usr/src/app/uploads


# Expose port
EXPOSE 8080

CMD [ "-v","/root/upload:/usr/src/app/uploads","npm", "start" ]

#WORKDIR /ui
#
#COPY  . /ui
#
#RUN npm install
#
#EXPOSE 8080
##CMD  npm start
#CMD [ "npm", "start" ]
