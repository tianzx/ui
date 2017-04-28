/**
 * Created by tianzx on 2017/4/28.
 */
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const http = require('http');
const request = require('request');
// const config = require('../../config.json');
const qs = require('qs');
const myHttp = require('../util/request/http/http');


const common = function (app) {

  app.post('/api/upload', upload.single('file'), function (req, res) {
    console.log(req.file);
    res.json({'code': '200'});
  });
}

module.exports = common;
