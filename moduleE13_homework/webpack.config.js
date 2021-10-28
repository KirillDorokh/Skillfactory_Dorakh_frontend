const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        port: 9000,
        static: ['dist'],
        compress: true,
        client: {
            logging: 'info',
            reconnect: 5,
        },
        hot: 'only',
    },
    output: {
        filename: 'main.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.pug",
            filename: "index.html"
        }),
        new TerserWebpackPlugin(),
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [new TerserWebpackPlugin(), new OptimizeCssAssetsWebpackPlugin()]
    },
    module: {
        rules: [
            {
                use:[{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        esModule: true,
                    }
                }, "css-loader"],
                test: /\.css$/
            },
            {
                test: /\.pug$/,
                use:"pug3-loader"
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'eslint-loader',
            }
        ]
    }
}