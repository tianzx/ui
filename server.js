const ioc = require('./server/service/ioc');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;
const express = require('express');
const app = express();
const projectConfig = require('./config.json');
const env = process.argv[2];
const path = require('path');
const publicPath = path.resolve(__dirname);

/**
 * different environment
 */
if (isDeveloping) {
  // require('babel-register')
  const webpack = require('webpack');
  console.log('enter develop');
  // const DashboardPlugin = require('webpack-dashboard/plugin');
  // const Dashboard = require('webpack-dashboard');
  const config = require('./webpack.devleop.config.js');
  const compiler = webpack(config);
  // const dashboard = new Dashboard();
  // compiler.apply(new DashboardPlugin(dashboard.setData));
  app.use(require('webpack-hot-middleware')(compiler));
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    quiet: true,
  }));
  app.use(express.static(publicPath));

} else {
  const options = {
    // dotfiles: 'ignore',
    // etag: false,
    // extensions: ['htm', 'html'],
    // index: false,
    maxAge: '5 days',
    // redirect: false,
    // setHeaders: function (res, path, stat) {
    //   res.set('x-timestamp', Date.now());
    // }
  }
  app.use(express.static(publicPath,options));
  console.log('enter production');
}

/**
 * RESTful API
 */
app.use(bodyParser.json({type: 'application/json'}));
app.use(cookieParser());

const port = isProduction ? (process.env.PORT || 8080) : 7777;

ioc(app);
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
