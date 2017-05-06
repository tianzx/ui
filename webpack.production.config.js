const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
const WebpackChunkHash = require("webpack-chunk-hash");

module.exports = {
  entry: {
    main: './src/index',
    vendor: ['react', 'superagent', 'redux', 'js-cookie', 'moment','react-dom','react-google-maps'],
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name]-[chunkhash:6].js",
    // chunkFilename: "[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: './',
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
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(zh-cn)$/),
    new UglifyJsParallelPlugin({
      workers: os.cpus().length,
      mangle: true,
      compress: {
        unused: true,
        dead_code: true, // big one--strip code that will never execute
        warnings: false, // good for prod apps so users can't peek behind curtain
        drop_debugger: true,
        conditionals: true,
        evaluate: true,
        drop_console: true, // strips console statements
        sequences: true,
        booleans: true,
      }, output: {
        comments: false,  // remove all comments
      },
      exclude: [/\.min\.js$/gi] // skip pre-minified libs
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CopyWebpackPlugin([
      {from: path.join(__dirname, 'asserts') + '/**/*', to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'server/**/*'), to: path.join(__dirname, 'dist') + '/', ignore: 'server/test/**/*'},
      {from: path.join(__dirname, 'server.js'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'package.json'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'fake/*'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'config.json'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'Dockerfile'), to: path.join(__dirname, 'dist') + '/'},
      {from: path.join(__dirname, 'config.js'), to: path.join(__dirname, 'dist') + '/'},
    ]),

    new ExtractTextPlugin("styles-[chunkhash:6].css"),

    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor","manifest"],
      // minChunks: 2,
      minChunks: Infinity,
    }),

    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename: "chunk-manifest.json",
      manifestVariable: "webpackManifest"
    }),
    // new webpack.optimize.CommonsChunkPlugin({'common-[chunkhash:6].js': ['main', 'vendor']})
    new HappyPack({
        id: 'js',
        loaders: [{
          loader: 'babel-loader',
        }],
        threadPool: happyThreadPool,
      }
    ),
    new HappyPack({
        id: 'less',
        loaders: [
          'css-loader?minimize!less-loader?minimize',
        ],
        threadPool: happyThreadPool,
      }
    ),
    // new HappyPack({
    //     id: 'css',
    //     loaders: [
    //       'css-loader?minimize',
    //     ],
    //     threadPool: happyThreadPool,
    //   }
    // ),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        use: [{
          // loader: "babel-loader?cacheDirectory",
          loader: "happypack/loader" + "?id=js",
        }],
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          // fallback: 'style-loader',
          use: [{
            loader: "happypack/loader" + "?id=less"
          }]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "happypack/loader" + "?id=css"
          }]
        })
      },
      {
        test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
        use: [{
          loader: "url-loader?limit=8192&name=images/[name]-[hash:6].[ext]"
        }]
      },
    ]
  }
}
;


