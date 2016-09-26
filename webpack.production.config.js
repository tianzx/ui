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
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
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
                test: /\.less$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'less-loader?{"sourceMap":false}'
                ],
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/,
            //     loader: 'file',
            // },
            // {
            //     test: /\.ico$/,
            //     loader: 'file-loader?name=[name].[ext]'
            // }
            {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
            {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
        ]
    }
};
