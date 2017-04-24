/**
 * Created by tianzx on 2017/4/20.
 */
const config = require('../../config');
const utils = require('./index');
utils.Dir.scanDir( config.root+ "/server/controller");
const ioc = (app) => {
  // console.log(app)
  for (var value of utils.Dir.files) {
    func = require(value);
    func(app);
  }
}
module.exports = ioc;
