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
