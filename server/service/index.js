/**
 * Created by tianzx on 2017/4/19.
 */
const fs = require('fs')

function ScanDir(path,files) {
  let that = this
  if (fs.statSync(path).isFile()) {
    return files.push(path)
  }
  try {
    fs.readdirSync(path).forEach(function (file) {
      ScanDir.call(that, path + '/' + file)
    })
  } catch (e) {
  }
}

ScanDir(process.cwd())
console.log(files)
