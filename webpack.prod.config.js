var reactConfig = require("./config.json").react;
var path = require('path');
var APP_DIR = path.resolve(__dirname, reactConfig.appDir);
var BUILD_DIR = path.resolve(__dirname, reactConfig.buildDir);

var config = {
    devtool: 'source-map',
    entry: {
        welcome: APP_DIR + "/" + reactConfig.components.welcome.entry
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: APP_DIR,
                test: /\.js$/,
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};

module.exports = config;