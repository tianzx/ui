/**
 * Created by tianzx on 2017/3/20.
 */
// const data = require('../../fake/js');
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');
const common = require('./common');
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

const file  = function (app) {

  function convertData(data) {
    let routes = [];
    for (const map of data) {
      let m = {lat: 0, lng: 0};
      m.lat = map.latitude;
      m.lng = map.longitude;
      console.log(m);
      routes.push(m);
    }
    let mapData = {
      data: {
        defaultZoom: 18,
        defaultCenter: routes[0],
        routes: routes
      }
    }
    return mapData
  };

  app.post('/api/file/fota', function (req, res) {
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
    const queryString = {

    }
    const environment = req.cookies.env;
    const fotaUrl = "http://localhost:6002" + "/fota/version?" + qs.stringify(queryString);
    request({
        method: 'GET',
        url: fotaUrl,
      }, function (error, response, body) {
        // console.log(error);
        // console.log('-----');
        try {
          console.log(body);
          const data = JSON.parse(body);
          const fotaData =
          console.log("---------")
          res.json(
            {fotas: fotaData}
          );
        } catch (error) {
          console.log(error);
        }
      }
    );
  });
}

module.exports = file;
