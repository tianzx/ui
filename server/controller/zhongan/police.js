/**
 * Created by tianzx on 2016/11/29.
 */
// const http = require('http');
const config = require('../../config.json');
const qs = require('qs');
const common = require('./common');
/**
 *
 * console.log(map.sn);
 console.log(map.time[0]);
 console.log(map.time[1]);
 console.log(req.cookies.env);
 * @param app
 */

const police = function (app) {

  app.post('/api/zhongan/policy', function (req, res) {
    const policy = req.body;
    const queryString = {
      serialNumber: policy.sn,
    };
    const environment =  req.cookies.env;
    const mapUrl = common.getEnvironment(environment) + "/zhongan/policy?" + qs.stringify(queryString);

  });
}

module.exports = police;
