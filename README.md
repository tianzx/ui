# React Ant.Design Admin UI
 [![Build Status](https://travis-ci.org/tianzx/ui.svg?branch=master&1=1)](https://travis-ci.org/tianzx/ui)
## Features

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Ant.Design](http://ant.design/)
- [Babel](https://babeljs.io/)
- [webpack2](https://webpack.github.io/)
- [mocha](https://mochajs.org/)
- [enzyme](https://github.com/airbnb/enzyme)
- [Travis](https://travis-ci.org/)
- [Docker](https://www.docker.com/)

## Getting Started

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/tianzx/ui.git
$ cd ui
$ npm install
$ npm start
```

## Run test spec

```shell
$ npm run test
```

## Run production build

```shell
$ vi /etc/environment and export NODE_ENV='production'
$ npm run build
```

in your local machine
```shell
$ scp -r localPath/ui/dist/  remotePath:ui
```

in your remote machine
```shell
$ mv dist/* ./
$ cnpm install pm2 -g 
$ pm2 start server.js
```

notation: before execute the command ,you must ensure you have executed the command

```shell
$ cnpm install rimraf -g
```

## NOTICE

### replace npm with cnpm(in China)
&emsp;&emsp;&emsp;&emsp;https://npm.taobao.org/
### add n to admin nodejs version
&emsp;&emsp;&emsp;&emsp;https://github.com/tj/n

### update npm 
&emsp;&emsp;&emsp;&emsp;cnpm update -g npm
