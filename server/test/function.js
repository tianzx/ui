/**
 * Created by tianzx on 2017/3/24.
 */
const file = require('../../fake/file');
const _ =  require('lodash');
const moment = require('moment');


const convertTime = function(val){
  return val.createTime = moment.unix(val);
};

// const cv_file = _.map(file,convertTime);


_.each(file,function (value) {
  console.log(moment.unix(value.createTime/1000).format("YYYY-MM-DD HH:mm:ss"));
});

_.each(file,function (value) {
  console.log(value);
});
