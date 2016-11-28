/**
 * Created by tianzx on 2016/11/1.
 */
const config = require('../../config.json');
const Buffer = require('Buffer');
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
}

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
  }
  // console.log(env);
  return env;
}
// getEnvironment("local");
