const path = require('path');
const webpack = require('webpack');
var HappyPack = require('happypack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HappyPack({
      loaders: [{
        loader: 'babel-loader',
      }],
      threads: 4
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        use: [{
          loader: "happypack/loader",
        },
        ]
      },
      {
        test: /(\.css|\.less)$/,
        // exclude: /node_modules/,
        include: __dirname,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      }
    ]
  }
};
