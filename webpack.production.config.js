var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HappyPack = require('happypack');
module.exports = {
    entry: {
        bundle: './src/index',
        vendor: ['react', 'lodash', 'antd']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle-[chunkhash:6].js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin({
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
            { from: path.join(__dirname, 'asserts')+'/**/*', to: path.join(__dirname,'dist')+'/'},
            { from: path.join(__dirname, 'server.js'), to: path.join(__dirname,'dist')+'/'},
            { from: path.join(__dirname, 'package.json'), to: path.join(__dirname,'dist')+'/'},
        ])
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
                test: /(\.css|\.less)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":false}'
                ],
            },
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
        ]
    }
};
