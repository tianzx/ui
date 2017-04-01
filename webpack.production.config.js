const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    bundle: './src/index',
    vendor: ['react']
  },
  output: {
    path: __dirname + '/dist',
    // path: path.join(__dirname, 'dist'),
    // filename: 'bundle-[chunkhash:6].js',
    filename: "[name].chunkhash.js",
    chunkFilename: "[chunkhash].js",
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './asserts/favicon.ico',
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true
      }, output: {
        comments: false,  // remove all comments
      },
    }),
    // new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["common", "manifest"]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    // new HappyPack({
    //   loaders: ['babel?presets[]=es2015'],
    // }),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, 'asserts') + '/**/*', to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'server.js'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'package.json'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname,'/server/controller/map.js'),to:path.join(__dirname,'dist')+'/controller'},
      {from: path.join(__dirname,'fake/*'),to:path.join(__dirname,'dist')+'/fake'},
      {from: path.join(__dirname,'config.json'),to:path.join(__dirname,'dist')+'/'},
    ]),

    new ExtractTextPlugin("styles-[chunkhash:6].css"),
  ],
  // resolve: {
  //   extensions: ['', '.js', '.jsx']
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        // loaders: ['happypack/loader'],
        // loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
        use: [{
          loader: "babel-loader",
        }]
      },
      {
        // test: /\.less$/,
        // loader: ExtractTextPlugin.extract('style-loader', "css-loader!less-loader")
        //loader: ( "style-loader!css-loader!less-loader")
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        })
        // loader: ExtractTextPlugin.extract('', "css-loader")
      },
      {
        test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
        use:[{
          loader: "url-loader?limit=8192&name=images/[name]-[hash:6].[ext]"
        }]
      },
    ]
  }
};
