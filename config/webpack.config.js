const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

const path = require('path');

const PROJECT_ROOT_PATH = '../';
const REACT_BASE_PATH = '../src/';
const REACT_DEV_SERVER_OUTPUT_PATH = path.resolve(__dirname, '../public/');
const REACT_OUTPUT_PATH = path.resolve(__dirname, '../dist/');
const REACT_OUTPUT_FILE_NAME = 'bundle.js';

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@Images': path.resolve(__dirname, PROJECT_ROOT_PATH, 'images'),
            '@Components': path.resolve(
                __dirname,
                REACT_BASE_PATH,
                'components'
            ),
            '@Shared': path.resolve(__dirname, REACT_BASE_PATH, 'shared'),
            '@Pages': path.resolve(__dirname, REACT_BASE_PATH, 'pages')
        }
    },
    entry: './index.tsx',
    devtool:
        process.env.NODE_ENV === 'production'
            ? 'source-map'
            : 'cheap-eval-source-map',
    output: {
        path:
            process.env.NODE_ENV === 'production'
                ? REACT_OUTPUT_PATH
                : REACT_DEV_SERVER_OUTPUT_PATH,
        filename: REACT_OUTPUT_FILE_NAME,
        chunkFilename: '[name].js'
    },
    devServer: {
        contentBase: REACT_DEV_SERVER_OUTPUT_PATH,
        disableHostCheck: false,
        port: 3000,
        compress: true,
        hot: true,
        writeToDisk: false,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.tsx{0,1}$/,
                exclude: /\.test\.tsx{0,1}$/,
                use: ['ts-loader']
            },
            {
                test: /\.(svg|jpeg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: REACT_DEV_SERVER_OUTPUT_PATH + '/index.html'
        }),
        new AsyncChunkNames(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 5000,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 20
                },
                // common chunk
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    }
};
