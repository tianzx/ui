/**
 * Created by tianzx on 2017/3/24.
 */
const file = require('../../fake/file');
const _ = require('lodash');
const moment = require('moment');


/**
 * before convert datetime
 */
_.each(file, function (value) {
  // console.log(value.createTime);
});

/**
 * convert datetime
 */
_.map(file, function (value) {
  value.createTime = moment.unix(value.createTime / 1000).format("YYYY-MM-DD HH:mm:ss");
  // console.log(value.createTime);
});

/**
 * convert datetime no side effects
 * @type {Array}
 */
const file2 = _.map(file,function(value){
  const temp = _.cloneDeep(value);
  // console.log(temp);
  temp.createTime = moment.unix(temp.createTime / 1000).format("YYYY-MM-DD HH:mm:ss");
  return temp;
});

/**
 * after convert datetime
 */
_.each(file, function (value) {
  // console.log(value.createTime);
});

_.each(file2, function (value) {
  // console.log(value);
});
