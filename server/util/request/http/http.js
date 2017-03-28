/**
 * Created by tianzx on 2017/3/28.
 */
const http = require('http');
const request = require('request');
const qs = require('qs');

exports.get = function (queryStringData = {}, serviceName = "/fota/commitLog?", url= "http://test.smartautotech.com") {

  const queryString = queryStringData;
  const j = request.jar();
  const cookie = request.cookie('chleon-token=4f656a385c32811f2655b53aa53206fa');
  const requestUrl = url + serviceName + qs.stringify(queryString);
  j.setCookie(cookie, requestUrl);
  request({
      method: 'GET',
      url: requestUrl,
      jar: j
    }, function (error, response, body) {
      try {
        console.log("--------- begin request-------");
        console.log(body);
        const data = JSON.parse(body);
        console.log("--------- finish request------");
        return {
          data: data
        }
      } catch (error) {
        console.log(error);
      }
    }
  );
}

// module.exports = get;
