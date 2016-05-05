var webpack = require('webpack');

module.exports = {
    entry: "./src/main.js",
    devtool: "source-map",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
    ]
};
