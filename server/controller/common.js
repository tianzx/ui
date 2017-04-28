/**
 * Created by tianzx on 2017/4/28.
 */
const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.')
  }
})

const upload = multer({ storage: storage });

const http = require('http');
const request = require('request');
// const config = require('../../config.json');
const qs = require('qs');

const common = function (app) {

  app.post('/api/upload', upload.single('file'), function (req, res) {
    console.log(req.file);
    res.json({'code': '200'});
  });
}

module.exports = common;
