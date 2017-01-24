var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/main/polyfills.ts',
        'vendor': './src/main/vendor.ts',
        'app': './src/main/main.ts'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw!html-minify'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'main'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'main'),
                loader: 'raw'
            },
            {
                test: /\.less$/,
                include: helpers.root('src', 'main'),
                exclude: helpers.root('src', 'main', 'style'),
                loader: 'raw!less'
            },
            {
                test: /\.less$/,
                include: helpers.root('src', 'main', 'style'),
                loader: 'style!css!less'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/main/index.html'
        })
    ],

    htmlLoader: {
        minimize: {
            collapseWhitespace: true,
            conservativeCollapse: true
        }
    },

    'html-minify-loader': {
        empty: true,
        cdata: true,
        comments: false,
        dom: {
            lowerCaseAttributeNames: false
        }
    }
};
