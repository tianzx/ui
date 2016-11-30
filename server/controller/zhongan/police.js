/**
 * Created by tianzx on 2016/11/29.
 */
// const http = require('http');
const config = require('../../config.json');
const common = require('../common');
const utils = require('./utils');
/**
 *
 * console.log(map.sn);
 console.log(map.time[0]);
 console.log(map.time[1]);
 console.log(req.cookies.env);
 * @param app
 */

const police = function (app) {

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

  app.post('/api/zhongan/policy', function (req, res) {
    const policy = req.body;
    const queryString = {
      serialNumber: policy.sn,
    };
    const environment =  req.cookies.env;
    const url = common.getEnvironment(environment) + utils.ZHONGAN_POLICE+"?" + qs.stringify(queryString);
    common.get(url,convertData);
  });

}

module.exports = police;
