/**
 * Created by tianzx on 2017/4/19.
 */
const fs = require('fs')
let files = [];
function scanDir(path) {
  let that = this;
  if (fs.statSync(path).isFile()) {
    return files.push(path)
  }

  try {
    fs.readdirSync(path).forEach(function (file) {
      scanDir.call(that, path + '/' + file)
    })
  } catch (e) {
  }
}
const Dir = {
  files : files,
  scanDir: scanDir
}

exports.Dir = Dir;

