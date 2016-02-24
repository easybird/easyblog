module.exports = {
    context: __dirname + '/app',
    entry: './index.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    devtool: 'eval-source-map',

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
