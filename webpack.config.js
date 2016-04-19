var config = require("./webpack.prod.config.js");

config.devtool = 'eval';

module.exports = config;