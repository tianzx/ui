/**
 * Created by tianzx on 2016/10/26.
 */
const data = require('../../fake/map');
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');
const mapData = {
  path: '/webGPS/getGPSRoutes'
}

const map = function (app) {

  function convertData(data) {
    let routes = [];
    for (const map of data) {
      let m = {lat: 0, lng: 0};
      m.lat = map.latitude;
      m.lng = map.longitude;
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
    const mapUrl = "http://42.121.121.128:8003" + "/webGPS/getGPSRoutes?" + qs.stringify(queryString);
    request({
        method: 'GET',
        url: mapUrl,
      }, function (error, response, body) {
        try {
          const array = JSON.parse(body);
          mapData = convertData(array.gpsData);
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
