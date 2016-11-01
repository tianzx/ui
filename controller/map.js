/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../fake/map');
const http = require('http');
const request = require('request');
const config = require('../config.json');
const qs = require('qs');
const mapData = {
  path: '/webGPS/getGPSRoutes'
}
/**
 *
 * console.log(map.sn);
   console.log(map.time[0]);
   console.log(map.time[1]);
   console.log(req.cookies.env);
 * @param app
 */

const map = function (app) {
  app.post('/api/map', function (req, res) {
    const map = req.body;
    const stringTime = map.time[0];
    const stringTime2 = map.time[1];
    let timestamp2 = Date.parse(new Date(stringTime));
    // timestamp2 = timestamp2 / 1000;
    console.log(timestamp2);
    console.log(stringTime + "的时间戳为：" + timestamp2);
    let timestamp3 = Date.parse(new Date(stringTime2));
    // timestamp3 = timestamp3 / 1000;
    console.log(timestamp3);
    console.log(stringTime2 + "的时间戳为：" + timestamp3);
    const queryString = {
      serialNumber: map.sn,
      beginTime: timestamp2,
      endTime: timestamp3
    };
    const mapUrl = config.api.local+"/webGPS/getGPSRoutes?"+qs.stringify(queryString);
    request({
        method: 'GET',
        url: mapUrl,
      }, function (error, response, body) {
        // body is the decompressed response body
        // console.log('server encoded the data as: ' + (response.headers['content-encoding'] || 'identity'))
        console.log('the decoded data is: ' + body);
      }
    )
    //   .on('data', function (data) {
    //     // decompressed data as it is received
    //     console.log('decoded chunk: ' + data)
    //   }).on('response', function (response) {
    //   // unmodified http.IncomingMessage object
    //   response.on('data', function (data) {
    //     // compressed data as it is received
    //     console.log('received ' + data.length + ' bytes of compressed data')
    //   })
    // })
    res.json(
      {maps: data}
    );
  });
}

module.exports = map;
