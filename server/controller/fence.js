/**
 * Created by tianzx on 2017/4/19.
 */
const http = require('http');
const request = require('request');
const config = require('../../config.json');
const qs = require('qs');
const fence = function (app) {
  let i = 0;
  let fenceData = {
    "meta": {
      "total": 15,
      "pageSize": 10,
      "current": 1
    },
    "nav": {
      "keyPath": ["sub1", "menu101"],
      "key": "menu101"
    },
    "data": [
      {
        "id": 1,
        "name": "fence1",
        "agreement": "true",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      },
      {
        "id": 2,
        "name": "fence2",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      }, {
        "id": 3,
        "name": "fence3",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      }, {
        "id": 4,
        "name": "fence4",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      }, {
        "id": 5,
        "name": "fence5",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      }, {
        "id": 6,
        "name": "fence6",
        "roles": "管理员",
        "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
      },
      {
        "id": 7,
        "name": "fence7",
        "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
      }, {
        "id": 8,
        "name": "fence8",
        "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
      }, {
        "id": 9,
        "name": "fence9",
        "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
      }, {
        "id": 10,
        "name": "fence10",
        "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
      }
    ]
  }

  /**
   * 获取不同的nav
   */
  app.get('/api/nav/:url', function (req, res) {
    // if(req.params.url=='fence'){
    res.json({
      data: ["menu101", "sub1"]
    })
  })
  /**
   * 获取fence列表
   */
  app.get('/api/fence', function (req, res) {
    res.json({
      fences: fenceData
    });
  });
  /**
   * 新增fence
   * create
   */
  app.post('/api/fence', function (req, res) {
    let i = 10;
    const fence = req.body;
    const name = fence.fenceName;
    let data = {
      "id": i++,
      "name": name,

    }
    fenceData.data.push(data);
    res.json({'message': 'success'});
  })
  /**
   * 获取指定fence数据
   * retrieve
   */
  app.get('/api/fence/:id', function (req, res) {
    res.json({

      fence: fenceData.data[req.params.id - 1]
    })
  })
  /**
   * 更新fence
   * update
   */
  app.put('/api/fence', function (req, res) {
    const fence = req.body;
    fenceData.data[fence.id] = fence;
    res.json({
      success: "success"
    })
  })
  /**
   * 删除fence
   * delete
   */
  app.delete('/api/fence/:id', function (req, res) {
    fenceData.data.splice(req.params.id, 1);
    // console.log(req.params.id);
    res.json({
      success: "success"
    })
  })
}

module.exports = fence;
