/**
 * Created by tianzx on 2016/11/1.
 */
const config = require('../../config.json');
// const Buffer = require('Buffer');
const qs = require('qs');
const request = require('request');

// do a get request
// prepare the header
// 'Content-Length' : Buffer.byteLength(reqJosnData, 'utf8')
const postHeaders = {
  'Content-Type': 'application/json; charset=UTF-8',
};

// the get options
const initOptions = {
  host: '',
  port: '',
  path: '',
  method: 'GET',
  headers: postHeaders
};

exports.initPostOptions=(options = {}) =>{
  return Object.assign({}, initOptions, options);
};

exports.getEnvironment=(env)=>{
  const api = config.api;
  if(env==="local"){
    env = api.local;
  }else if(env ==="test"){
    env = api.test;
  }else if(env ==="production_cn"){
    env = api.production_cn;
  }else if (env ==="production_ge"){
    env = api.production_ge;
  }else {
    env = api.production_cn;
  }
  // console.log(env);
  return env;
};

// getEnvironment("local");
exports.get=(param={
  environment:"local"
})=>{
  const url = getEnvironment(param.environment) + param.route+"?" + qs.stringify(param.queryString);
  request({
      method: 'GET',
      url: url,
    }, function (error, response, body) {
      console.log(error);
      try {
        const array = JSON.parse(body);
        const data = policyParam.convertData(array);
        return data;
      } catch (error) {
        console.log(error);
      }
    }
  );
};

/**
 * es5 promise implement
 */
var promisifyEs5 = function promisify(fn, receiver) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      fn.apply(receiver, [].concat(args, [function (err, res) {
        return err ? reject(err) : resolve(res);
      }]));
    });
  };
};

let promisify = (fn, receiver) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res);
      }]);
    });
  };
};

const getPromise = promisify(request,request.get);

// getPromise('https://google.com/img1.png')
//   .then(function (response) {
//     console.log(response.statusCode) // 200
//     console.log(response.headers['content-type']) // 'image/png'
//     return getPromise('http://google.com/img.png')
//   },function (error) {
//     console.log("false");
//     console.log(error);//eg: such as url's false
//   })
//   .then(function (response) {
//     console.log("success");
//     console.log(response.statusCode) // 200
//   })
  // .on('response', function(response) {
  //   console.log(response.statusCode) // 200
  //   console.log(response.headers['content-type']) // 'image/png'
  // })
