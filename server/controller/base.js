/**
 * Created by tianzx on 2017/4/19.
 */
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');

// const common = require('./common');
// const fota = require('../../fake/file');
// const datetime = require('../util/datetime/datetime');
// const myHttp = require('../util/request/http/http');
const base = function (app) {
  app.put('/api/login', function (req, res) {
    const credentials = req.body;
    if (credentials.user === 'admin' && credentials.password === 'zixuan12') {
      res.cookie('uid', '1', {domain: '127.0.0.1'});
      res.cookie('smartauto-token', "12345678");
      // res.cookie('user',"tianzx")
      res.json({'user': credentials.user, 'role': 'ADMIN', 'uid': 1});
    } else {

      res.status('500').send({'message': 'Invalid user/password'});
    }
  });
  /**
   * 获取菜单
   */
  app.post('/api/menu', function (req, res) {
    res.json({
      menus: [
        {
          key: 1,
          name: 'Dashboard',
          icon: 'user',
          child: [
            {
              name: '电子围栏',
              key: 101,
              url: 'fence'
            },
            {
              name: '用户',
              key: 102,
              url: 'user'
            },
            {
              name: '谷歌地图',
              key: 103,
              url: 'map'
            },
            {
              name: 'file',
              key: 104,
              url: 'file'
            }
          ]
        },
        {
          key: 2,
          name: '导航二',
          icon: 'laptop',
          child: [
            {
              name: 'sn',
              key: 201,
              url: 'sn'
            },
            {
              name: '选项2',
              key: 202
            },
            {
              name: '选项3',
              key: 203
            },
            {
              name: '选项4',
              key: 204
            }
          ]
        },
      ]
    });
  });
  /**
   * 获取我的信息
   */
  app.post('/api/my', function (req, res) {
    res.json({'user': 'admin', 'role': 'ADMIN', 'uid': 1});
  });
  /**
   * 退出当前账户
   */
  app.post('/api/logout', function (req, res) {
    res.clearCookie('uid');
    res.json({'user': 'admin', 'role': 'ADMIN'});
  });
}

module.exports = base;

