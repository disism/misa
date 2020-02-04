const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'js/[name]_bundle.[chunkHash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1,
                            name: 'assets/images/[name].[contenthash].[ext]',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'magazine',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]_bundle.[chunkHash:8].css'
        }),

        new CopyPlugin([
            {
                from: path.resolve(process.cwd(), 'src/assets/static/'),
                to: path.resolve(process.cwd(), 'public/assets/static/') 
            },
        ]),

        new CleanWebpackPlugin(),
    ],
}