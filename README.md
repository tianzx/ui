## React Ant.Design Admin UI

## Features

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Ant.Design](http://ant.design/)
- [Babel](https://babeljs.io/)
- [webpack](https://webpack.github.io/)
- [mocha](https://mochajs.org/)
- [enzyme](https://github.com/airbnb/enzyme)

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
$ npm run build
```
```in your local machine
$ scp -r localPath/ui/dist/  remotePath:ui
```
```in your remote machine
$ mv dist/* ./
$ cnpm install pm2 -g 
$ pm2 start server.js
```
notation: before execute the command ,you must ensure you have executed the command
```shell
$ cnpm install rimraf -g
```

## NOTICE

### replace npm with cnpm
&emsp;&emsp;&emsp;&emsp;https://npm.taobao.org/
### add n to admin nodejs version
&emsp;&emsp;&emsp;&emsp;https://github.com/tj/n
