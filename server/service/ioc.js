/**
 * Created by tianzx on 2017/4/20.
 */
const config = require('../../config');
const utils = require('./index');
utils.Dir.scanDir( config.root+ "/server/controller");
console.log(utils.Dir.files)
const ioc = (app) => {
  // console.log(app)
  for (var value of utils.Dir.files) {
    console.log(value);
    func = require(value);
    console.log(func);
    func(app);
  }
}
// console.log(utils.Dir.files);
module.exports = ioc;
