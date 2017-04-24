/**
 * Created by tianzx on 2017/4/18.
 */

const http = require('http');
const request = require('request');
// const config = require('../../config.json');
const qs = require('qs');
// const common = require('./common');
const datetime = require('../util/datetime/datetime');
const myHttp = require('../util/request/http/http');

const sn = function (app) {

  app.get('/api/sn/upload/', function (req, res) {
    const queryString = {
      id: req.params.id
    }

    const func = function (data) {
      res.json({
        files: {
          data: data,
        }
      });
    }
    myHttp.get(queryString,func);
  })
}

module.exports = sn;
