#webapck plugin
##[HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
  * Simplifies creation of HTML files to serve your webpack bundles
##[CopyWebpackPlugin]()
  * Copy files and directories in webpack
##[UglifyJsParallelPlugin](https://github.com/tradingview/webpack-uglify-parallel)
  * [standard uglify webpack plugin](https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin)
  * Identical to standard uglify webpack plugin, with an option to build multiple files in parallel
##[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
  * Extract text from bundle into a file
##[less-loader](https://github.com/webpack-contrib/less-loader)
  * Less loader for webpack. Compiles Less to CSS.
  * Use the css-loader or the raw-loader to turn it into a JS module and the ExtractTextPlugin to extract it into a 
  separate file.
##[css-loader](https://github.com/webpack-contrib/css-loader)
  * css loader module for webpack
  * The css-loader interprets @import and url() like import/require() and will resolve them.
##[style-loader](https://github.com/webpack-contrib/style-loader)
  * style loader module for webpack
  * It's recommended to combine style-loader with the css-loader
  * Loading CSS requires the css-loader and the style-loader. 
  They have two different jobs. The css-loader will go through the CSS file and find url() expressions and resolve them. 
  The style-loader will insert the raw css into a style tag on your page.
  * just for develop environment
##[HappyPack](https://github.com/amireh/happypack)
  * HappyPack makes webpack builds faster by allowing you to transform multiple files in parallel.
##[url-loader]()   
  * The url-loader works like the file-loader, but can return a data URL if the file is smaller than a byte limit.
    


##Attention
  * webpack loader parse from right to left

