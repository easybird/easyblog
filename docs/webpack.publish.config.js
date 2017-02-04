var reactConfig = require("./config.json").reactPublish;
var path = require('path');
var APP_DIR = path.resolve(__dirname, reactConfig.appDir);
var PUBLISH_DIR = path.resolve(__dirname, reactConfig.publishDir);
var webpack = require("webpack");

var config = {
    devtool: 'source-map',
    entry: {
        articleList: path.resolve(APP_DIR, reactConfig.components.articleList.entry),
        articlePage: path.resolve(APP_DIR, reactConfig.components.articlePage.entry)
    },
    output: {
        path: PUBLISH_DIR,
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
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor:{
                warnings: true
            }
        })
    ]
};

module.exports = config;
