/**
 * Created by tianzx on 2017/4/28.
 */
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const config = require('../../../config');

exports.createFile = () => {
  let dir = moment().format("YYYY-DD-MM");
  const dirs = path.join(config.upload, dir);
  if(!fs.existsSync(config.upload)){
    fs.mkdirSync(config.upload);
  }
  if (!fs.existsSync(dirs)){
    fs.mkdirSync(dirs);
  }

  return dirs.toString();
}
