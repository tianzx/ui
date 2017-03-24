/**
 * Created by tianzx on 2017/3/24.
 */
const file = require('../../fake/file');
const datetime = require('../util/datetime/datetime');
const _ = require('lodash');

const data = datetime(file);
_.each(file, function (value) {
  console.log(value);
});
_.each(data, function (value) {
  console.log(value);
})


