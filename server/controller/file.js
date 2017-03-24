/**
 * Created by tianzx on 2017/3/20.
 */
// const data = require('../../fake/js');
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');
const common = require('./common');
const fota = require('../../fake/file')
const fileData = {
  path: '/fota/version'
}
/**
 *
 console.log(map.sn);
 console.log(map.time[0]);
 console.log(map.time[1]);
 console.log(req.cookies.env);
 * @param app
 */

const file = function (app) {

  app.get('/api/file/fota', function (req, res) {
    const map = req.body;
    // const beginTime = map.time[0];
    // const endTime = map.time[1];
    // let beginTimestamp = Date.parse(new Date(beginTime));
    // let endTimestamp = Date.parse(new Date(endTime));
    // let mapData = {};
    // const queryString = {
    //   serialNumber: map.sn,
    //   beginTime: beginTimestamp,
    //   endTime: endTimestamp
    // };
    console.log("to fetch fota data");
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
        // console.log(error);
        // console.log('-----');
        try {
          console.log("---------");
          console.log(body);
          const data = JSON.parse(body);
          const fotaData = data;
          console.log(fotaData.results);
          console.log("---------");
          res.json(
            {
              files: {
                data: fota,
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
}

module.exports = file;
