const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'inline-source-map',
    devServer: {
        port: 9000,
        static: './dist',
        compress: true,
        client: {
            logging: 'info',
            reconnect: 5,
        },
        hot: 'only',
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

};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.output = {
            filename: 'main.js',
        };
    }
    if (argv.mode === 'production') {
        config.output = {
            filename: 'super.js',
        };
    }
    return config;
}