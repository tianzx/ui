var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HappyPack = require('happypack');
module.exports = {
    entry: {
        bundle: './src/index',
        vendor: ['react', 'lodash', 'antd']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle-[chunkhash:6].js',
        publicPath: '/dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }, output: {
                comments: false,  // remove all comments
            },
            drop_console: true
        }),
        // new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor-[chunkhash:6].js'),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HappyPack({
            loaders: ['babel?presets[]=es2015'],
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['happypack/loader'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less?$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":false}'
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url',
                query: {limit: 10240}
            }
        ]
    }
};
