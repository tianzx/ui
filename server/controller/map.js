/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../../fake/map');
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');
// const common = require('./common');
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

  app.post('/api/map', function (req, res) {
    const map = req.body;
    const beginTime = map.time[0];
    const endTime = map.time[1];
    let beginTimestamp = Date.parse(new Date(beginTime));
    let endTimestamp = Date.parse(new Date(endTime));
    let mapData = {};
    const queryString = {
      serialNumber: map.sn,
      beginTime: beginTimestamp,
      endTime: endTimestamp
    };
    const environment = req.cookies.env;
    const mapUrl = "http://139.162.179.15:8003" + "/webGPS/getGPSRoutes?" + qs.stringify(queryString);
    request({
        method: 'GET',
        url: mapUrl,
      }, function (error, response, body) {
        // console.log(error);
        // console.log('-----');
        try {
          console.log(body);
          const array = JSON.parse(body);
          console.log(body)
          console.log("---------")
          console.log(array.gpsData);
          mapData = convertData(array.gpsData);
          // console.log(mapData)
          res.json(
            {maps: mapData}
          );
        } catch (error) {
          console.log(error);
        }
      }
    );
  });
}

module.exports = map;
