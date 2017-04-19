const map = require('./server/controller/map');
const file = require('./server/controller/file');
const sn = require('./server/controller/file');
const base=  require('./server/controller/base');
const fence=  require('./server/controller/fence');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;
const express = require('express');
const app = express();
const projectConfig = require('./config.json');
const env = process.argv[2];
const apiUrlPrefix = projectConfig.api[env];
/**
 * different environment
 */
if (isDeveloping) {
  // require('babel-register')
  const webpack = require('webpack');
  console.log('enter develop');
  // var DashboardPlugin = require('webpack-dashboard/plugin');
  // var Dashboard = require('webpack-dashboard');
  const config = require('./webpack.devleop.config.js');
  const compiler = webpack(config);
  // var dashboard = new Dashboard();
  // compiler.apply(new DashboardPlugin(dashboard.setData));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    quiet: true,
  }));
} else {
  console.log('enter production');
}

/**
 * RESTful API
 */
const publicPath = path.resolve(__dirname);
app.use(bodyParser.json({type: 'application/json'}));
app.use(express.static(publicPath));
app.use(cookieParser());

const port = isProduction ? (process.env.PORT || 8080) : 7777;
// let i = 0;
// let fenceData = {
//   "meta": {
//     "total": 15,
//     "pageSize": 10,
//     "current": 1
//   },
//   "nav": {
//     "keyPath": ["sub1", "menu101"],
//     "key": "menu101"
//   },
//   "data": [
//     {
//       "id": 1,
//       "name": "fence1",
//       "agreement": "true",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     },
//     {
//       "id": 2,
//       "name": "fence2",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     }, {
//       "id": 3,
//       "name": "fence3",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     }, {
//       "id": 4,
//       "name": "fence4",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     }, {
//       "id": 5,
//       "name": "fence5",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     }, {
//       "id": 6,
//       "name": "fence6",
//       "roles": "管理员",
//       "creatTime": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
//     },
//     {
//       "id": 7,
//       "name": "fence7",
//       "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
//     }, {
//       "id": 8,
//       "name": "fence8",
//       "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
//     }, {
//       "id": 9,
//       "name": "fence9",
//       "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
//     }, {
//       "id": 10,
//       "name": "fence10",
//       "creatTime": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
//     }
//   ]
// }
// // app.all('/*', function (request, res, next) {
// //   next();
// // });
// /**
//  * 获取不同的nav
//  */
// app.get('/api/nav/:url', function (req, res) {
//   // if(req.params.url=='fence'){
//   res.json({
//     data: ["menu101", "sub1"]
//   })
// })
// /**
//  * 获取fence列表
//  */
// app.get('/api/fence', function (req, res) {
//   console.log("fence")
//   res.json({
//     fences: fenceData
//   });
// });
// /**
//  * 新增fence
//  * create
//  */
// app.post('/api/fence', function (req, res) {
//   let i = 10;
//   const fence = req.body;
//   const name = fence.fenceName;
//   let data = {
//     "id": i++,
//     "name": name,
//
//   }
//   fenceData.data.push(data);
//   res.json({'message': 'success'});
// })
// /**
//  * 获取指定fence数据
//  * retrieve
//  */
// app.get('/api/fence/:id', function (req, res) {
//   res.json({
//
//     fence: fenceData.data[req.params.id - 1]
//   })
// })
// /**
//  * 更新fence
//  * update
//  */
// app.put('/api/fence', function (req, res) {
//   const fence = req.body;
//   fenceData.data[fence.id] = fence;
//   res.json({
//     success: "success"
//   })
// })
// /**
//  * 删除fence
//  * delete
//  */
// app.delete('/api/fence/:id', function (req, res) {
//   fenceData.data.splice(req.params.id, 1);
//   // console.log(req.params.id);
//   res.json({
//     success: "success"
//   })
// })

map(app);
file(app);
sn(app);
base(app);
fence(app);
/**
 *this is necessary to handle URL correctly since client uses Browser History
 */
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '', 'index.html'))
});
// 所有用户可以访问index.html, error.html
// admin可以访问admin.html, /getData
// 登陆用户可以访问home.html

app.listen(port, function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Server running on port ' + port);
});
