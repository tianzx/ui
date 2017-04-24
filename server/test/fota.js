/**
 * Created by tianzx on 2017/3/20.
 */
// import  qs from "qs";
// import  request from "request";
// import * as res from "express";
const qs = require('qs');
const request = require('request');
const queryString = {};
const j = request.jar();
const cookie = request.cookie('chleon-token=15c715d694469d95984039fe293822ea');
const fotaUrl = "http://192.168.199.151:6002" + "/fota/data?" + qs.stringify(queryString);
j.setCookie(cookie, fotaUrl);
request({
    method: 'GET',
    url: fotaUrl,
    jar: j
  },
  function (error, response, body) {
    try {
      const array = JSON.parse(body);
    } catch (error) {
      console.log(error);
    }
  }
)
;
