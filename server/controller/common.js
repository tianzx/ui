/**
 * Created by tianzx on 2016/11/1.
 */

const config = require('../config.json');
const Buffer = require('Buffer');
// do a POST request
// prepare the header
// 'Content-Length' : Buffer.byteLength(reqJosnData, 'utf8')
const postHeaders = {
  'Content-Type': 'application/json; charset=UTF-8',
};

// the post options
const initOptions = {
  host: config.api.local,
  port: '',
  path: '',
  method: 'GET',
  headers: postHeaders
};

function initPostOptions(options = {}) {
  return Object.assign({}, initOptions, options);
}

modules.exports = initPostOptions;
