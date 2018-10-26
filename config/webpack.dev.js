const path = require('path')
const webpack = require('webpack')
const common = require('./webpack.base.js')
const merge = require('webpack-merge')

module.exports = env => {
    return merge(common(env),{
        mode: "development",
        devtool: "cheap-module-eval-source-map",
        devServer: {
            contentBase: path.resolve(__dirname, '../dist')
        }
    })
}