/**
 * Created by tianzx on 2017/3/20.
 */
// const data = require('../../fake/js');
const http = require('http');
const request = require('request');
// const config = require('../../config.json');
const qs = require('qs');
// const common = require('./common');
const fota = require('../../fake/file');
const datetime = require('../util/datetime/datetime');
const myHttp = require('../util/request/http/http');

const fileData = {
  path: '/fota/version'
}

const file = function (app) {

  app.get('/api/file/fota', function (req, res) {
    const map = req.body;
    const queryString = {}
    const environment = req.cookies.env;
    const j = request.jar();
    const cookie = request.cookie('chleon-token=15c715d694469d95984039fe293822ea');
    const fotaUrl = "http://test.smartautotech.com" + "/fota/data?" + qs.stringify(queryString);
    j.setCookie(cookie, fotaUrl);
    request({
        method: 'GET',
        url: fotaUrl,
        jar: j
      }, function (error, response, body) {
        try {
          const data = JSON.parse(body);
          const fotaData = data;
          res.json(
            {
              files: {
                data: datetime(fota),
                meta: ""
              }
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
    );
  });

  app.get('/api/file/commitLog/:id', function (req, res) {
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

module.exports = file;
