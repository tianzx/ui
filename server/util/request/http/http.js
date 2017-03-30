/**
 * Created by tianzx on 2017/3/28.
 */
const http = require('http');
const request = require('request');
const qs = require('qs');

exports.get = function (queryStringData = {id:289}, func,serviceName = "/fota/commitLog?", url= "http://test.smartautotech.com") {

  const queryString = queryStringData;
  const j = request.jar();
  const cookie = request.cookie('chleon-token=83943b6cb2ad9c84c5503d5db3c6064e');
  const requestUrl = url + serviceName + qs.stringify(queryString);
  j.setCookie(cookie, requestUrl);
  console.log("--------- begin request-------");
  request({
      method: 'GET',
      url: requestUrl,
      jar: j
    }, function (error, response, body) {
      try {
        console.log(body);
        const data = JSON.parse(body);
        // console.log(data);
        console.log("--------- finish request------");
        func(data);
      } catch (error) {
        console.log(error);
      }
    }
  );
  console.log("--------- finish ------");
}
