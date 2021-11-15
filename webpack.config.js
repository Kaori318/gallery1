const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // удаляет все неиспользованные файлы из папки
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            { test: /\.(png|jpg|gif|svg)$/i, 
            use: [ 
                {loader: 'file-loader?name=/images/[name].[ext]'},
            ] 
            },
            { test: /\.(mp4)$/i, 
                use: 'file-loader?name=/video/[name].[ext]' 
            },
            { test: /\.(mp3)$/i, 
                use: 'file-loader?name=/audio/[name].[ext]' 
            },
            {test: /\.(scss)$/i, 
                use: ['css-hot-loader', MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/index.html'), 
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        }),
        new CleanWebpackPlugin(),
        new ImageMinimizerPlugin({
            severityError: "warning",
            minimizerOptions: {
              plugins: [
                ["gifsicle", {optimizationLevel: 3, interlaced: true }],
                ["mozjpeg", {quality:50}],
                ["pngquant", { quality: [0.7, 0.8] }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
              ],
            },
          }),
    ],
}