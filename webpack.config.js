var webpack = require('webpack');
var path = require('path');

var CONSTANTS_DIR = path.resolve(__dirname, 'app_client/Constants');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_CLIENT_DIR = path.resolve(__dirname, 'app_client');
var VIEW_BROWSER_DIR = path.resolve(__dirname, 'view_browser');

var config = {
  entry: {
    cadre: APP_CLIENT_DIR,
    viewBrowser: VIEW_BROWSER_DIR
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].min.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: [APP_CLIENT_DIR, VIEW_BROWSER_DIR],
      loader: 'babel-loader'
    },
    {
      test: /\.css$/,
      include: [APP_CLIENT_DIR, VIEW_BROWSER_DIR],
      loaders: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ],
  resolve: {
    alias: {
      Constants: CONSTANTS_DIR
    }
  }
};

module.exports = config;
