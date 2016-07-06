
var path = require('path');
var webpack = require('webpack');

var DEBUG = true;

module.exports = {
    entry: [
        'babel-polyfill',
        './examples/demo.js'
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['react', 'es2015']
                }
            }
            ,{
                test: /\.css$/,
                include: /(node_modules\/animate.css\/)/,
                loaders: [
                    'style',
                    `css-loader?${JSON.stringify({
                        sourceMap: DEBUG,
                        // CSS Modules https://github.com/css-modules/css-modules
                        modules: true,
                        localIdentName: DEBUG ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
                        // CSS Nano http://cssnano.co/options/
                        minimize: !DEBUG,
                    })}`,
                    'postcss-loader',
                ]
            }
            ,{
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                exclude: /(node_modules)/
            }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
