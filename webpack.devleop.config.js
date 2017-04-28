const path = require('path');
const webpack = require('webpack');
const os = require('os');
const HappyPack = require('happypack');

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
        loader: 'babel-loader?cacheDirectory',
      }],
      threads: os.cpus().length
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        use: [{
          // loader: "babel-loader?cacheDirectory",
          loader: "happypack/loader",
        },
        ]
      },
      {
        test: /(\.css|\.less)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            // options: {
            //   query: {limit: 10240}
            // }
          }
        ]
      }
    ]
  }
};
