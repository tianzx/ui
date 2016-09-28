var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HappyPack = require('happypack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: {
        bundle: './src/index',
        vendor: ['react', 'lodash']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle-[chunkhash:6].js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon:'./asserts/favicon.ico',
            filename: 'index.html',
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }, output: {
                comments: false,  // remove all comments
            },
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash:6].js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HappyPack({
            loaders: ['babel?presets[]=es2015'],
        }),
        new CopyWebpackPlugin([
            {from: path.join(__dirname, 'asserts') + '/**/*', to: path.join(__dirname, 'dist') + '/'},
            {from: path.join(__dirname, 'server.js'), to: path.join(__dirname, 'dist') + '/'},
            {from: path.join(__dirname, 'package.json'), to: path.join(__dirname, 'dist') + '/'},
        ]),
        new ExtractTextPlugin("styles-[chunkhash:6].css"),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                // loaders: ['happypack/loader'],
                loaders: ['babel'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader',  "css-loader!less-loader")
                //loader: ( "style-loader!css-loader!less-loader")
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('',  "css-loader")
            },
            // {
            //     test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
            //     loader: "file?name=images/[name]-[hash:6].[ext]"
            // },
            {
                test: /\.(png|jpe?g|eot|svg|ttf|woff2?)$/,
                loader: "url-loader?limit=8192&name=images/[name]-[hash:6].[ext]"
            },
        ]
    }
};
