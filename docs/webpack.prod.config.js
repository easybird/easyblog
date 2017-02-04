var reactConfig = require("./config.json").react;
var path = require('path');
var APP_DIR1 = path.resolve(__dirname, reactConfig.appDir1);
var APP_DIR2 = path.resolve(__dirname, reactConfig.appDir2);
var BUILD_DIR = path.resolve(__dirname, reactConfig.buildDir);

var config = {
  devtool: 'source-map',
  entry: {
    welcome: APP_DIR1 + "/" + reactConfig.components.welcome.entry
  },
  output: {
    path: BUILD_DIR,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [APP_DIR1, APP_DIR2],
        test: /\.js$/,
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  }
};

module.exports = config;
