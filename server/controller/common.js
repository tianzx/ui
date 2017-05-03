/**
 * Created by tianzx on 2017/4/28.
 */
const multer = require('multer');
const util = require('../util/file/index')
// const upload = multer({dest: 'uploads/'});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, util.createFile())
  },
  filename: function (req, file, cb) {
    // cb(null, file.originalname)
    cb(null, Date.now() + '_' + file.originalname)
  },

})

const upload = multer({
  storage: storage,
  // 文件过滤,这里只能是图片文件，通过返回值判断是否成功，下面不用在设置！
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/png'
      && file.mimetype !== 'image/jpg'
      && file.mimetype !== 'image/jpeg'
      && file.mimetype !== 'image/gif') {
      return cb(new Error('the file type cant be support'));
    }else {
      return cb(null, true);
    }

  },
  limits: {
    fieldNameSize: 50,
    fileSize: 1024 * 1024
  }
}).single('file');

const http = require('http');
const request = require('request');
// const config = require('../../config.json');
const qs = require('qs');

const common = function (app) {

  app.post('/api/upload', function (req, res) {
    upload(req, res, function (err) {
      if (err) {
        // 发生错误
        return res.json({'error': '出錯了,文件類型不對'});
      }else{
        return res.json({'code': '200'});
      }
    })
  });
}

module.exports = common;
