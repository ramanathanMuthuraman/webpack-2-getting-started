const webpack = require('webpack');
const ProvidePlugin = webpack.ProvidePlugin;
const SourceMapDevToolPlugin = webpack.SourceMapDevToolPlugin;
const LoaderOptionsPlugin = webpack.LoaderOptionsPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');

const PATHS = {
  dist: path.resolve(__dirname, 'dist')
};

module.exports = {
  entry: {
    app: './js/app.js',
    appProd: './js/app.prod.js',
    vendor: Object.keys(packageJson.dependencies).concat('./node_modules/bootstrap/dist/js/bootstrap.min.js'),
  },
  output: {
    path: PATHS.dist,
    filename: '[name]-[hash:8].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }, {
      test: /\.s?(a|c)ss$/i,
      loader: ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: [
          {loader: "css-loader"},
          {loader: "postcss-loader"},
          {loader: "sass-loader"}
        ]
      })
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new ExtractTextWebpackPlugin('[name]-[hash:8].css'),
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(PATHS.dist, {
      verbose: false
    }),
    new LoaderOptionsPlugin({
      options: {
        postcss: {
          plugins: [autoprefixer]
        }
      }
    }),
    new HtmlWebpackPlugin({
      environment: process.env.NODE_ENV,
      template: path.resolve(__dirname, 'index.html'),
      inject: false
    }),
    new CommonsChunkPlugin({name: 'vendor'}),
    new SourceMapDevToolPlugin({
      exclude: ['vendor']
    })
  ]
};
