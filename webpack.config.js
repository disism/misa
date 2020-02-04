const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/pages/about/index.js',
        article: './src/pages/article/index.js',
        magazine: './src/pages/magazine/index.js'
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
        new HtmlWebpackPlugin({
            title: 'about',
            filename: './pages/about/index.html', 
            template: './src/pages/about/index.html',
            chunks: ['about','about']
        }),
        new HtmlWebpackPlugin({
            title: 'article',
            filename: './pages/article/index.html', 
            template: './src/pages/article/index.html',
            chunks: ['article','article']
        }),
        new HtmlWebpackPlugin({
            title: 'magazine',
            filename: './pages/magazine/index.html', 
            template: './src/pages/magazine/index.html',
            chunks: ['magazine','magazine']
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
