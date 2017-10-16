var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getPluginsByEnv(env) {
  if(env.production) {
    return [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'vendor.js'
      }),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        output: { comments: false },
        mangle: false,
        compress: { warnings: false }
      }),
      new HtmlWebpackPlugin()
    ]
  }
}


module.exports = function(env) {
  console.log('env', env, __dirname);
  return {
    entry: {
      app: path.resolve(__dirname, 'src', 'index.js'),
      vendor: path.resolve(__dirname, 'src', 'vendor.js')
    },
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, 'src'),
          use: ['babel-loader']
        },
        (function(){
          if (env.production) {
            return {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
              })
            };
          }
          return {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          }
        }())
      ]
    },
    plugins: getPluginsByEnv(env)
  }
}