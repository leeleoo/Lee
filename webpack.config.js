/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

    output: {
        filename: 'main.js',
        publicPath: '/assets/'
    },

    cache: true,
    debug: true,
    devtool: 'sourcemap',
    entry: [
        'webpack/hot/only-dev-server',
        './src/Edge/MusicApp/'
    ],

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'styles': __dirname + '/src/styles',
            'mixins': __dirname + '/src/mixins',
            'components': __dirname + '/src/components/'
        }
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel-loader?optional=runtime'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'url-loader?limit=8192000'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: require.resolve("react"),
            loader: "expose?React"
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]

};
