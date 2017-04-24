/**
 * Created by tianzx on 2016/11/29.
 */
// const http = require('http');
const config = require('../../config.json');
const common = require('../common');
const utils = require('./utils');


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

  app.get('/api/zhongan/policy', function (req, res) {
    const policy = req.body;
    const policyParam = {
      route:utils.ZHONGAN_POLICE,
      queryString:{
        serialNumber: policy.sn,
      },
      convertData: convertData,
    };
    const policyData = common.get(policyParam);
    res.json(
      {policy: policyData}
    );
  });

}

module.exports = police;
