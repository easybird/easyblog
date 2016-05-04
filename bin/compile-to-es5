console.log("Start compiling to es5...");
var webpack = require('webpack');
var webpackConfig = require('../webpack.publish.config.js');

webpack(webpackConfig, function (err, stats) {
    try {
        var jsonStats = stats.toJson();
        if (err) throw new Error(err);
        if (jsonStats.errors.length > 0) throw new Error(jsonStats.errors);
        if (jsonStats.warnings.length > 0)
            console.log(jsonStats.warnings);
        console.log("Stop compiling to es5.");
    } catch(err) {
        console.log("Error: " + JSON.stringify(err));
    }
});