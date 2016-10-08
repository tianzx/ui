const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HappyPack = require('happypack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    /**
     * ['react', 'lodash']
     * vender 90kB(no antd)
     * bundle 540kB
     * total 630kB
     *
     * ['react', 'lodash','antd']
     * vender 1.23MB
     * bundle 412kB
     * total 1.6MB
     *
     *['react']
     * vender 21kB
     * bundle 610kB
     * total 630kB
     *
     * ['react','antd']
     * vender 1.16MB
     * bundle 482kB
     * total 1.6MB
     *
     * ['react']only import part of lodash
     * vender 21kB
     * bundle 570kB
     */
    entry: {
        bundle: './src/index',
        vendor: ['react']
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
