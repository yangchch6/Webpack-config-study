
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
    return {
        entry: path.resolve(__dirname, "../main.js"),
        output: {
            filename : '[name].js',
            path : path.resolve(__dirname,'../dist')
        },
        // externals: {
        //     react: "React",
        //     "react-dom": "ReactDOM",
        //     axios: "axios"
        // },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader'],
                },
                {
                    test: /\.less$/,
                    use: ['style-loader','css-loader','less-loader'],
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../index.html')
            }),
            new webpack.DefinePlugin({
                PRODUCTION: env
            })
        ]
    }
}