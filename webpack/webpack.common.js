const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

path.resolve(__dirname, '../');
const dirname = path.resolve(__dirname, '../')
require("babel-polyfill");
module.exports = {
  context: path.join(dirname, 'src'),
  entry: ['./index.js'],
  output: {
    path: path.resolve(dirname, './dist'),
    filename: 'game.min.[hash:8].js',
  },
  target: 'web',
  /* node: {
     fs: 'empty',*/
  /* dns: 'empty'
 },*/
  module: {
    rules: [
      /* {
         test: /\.(sass|scss)$/,
         exclude: /node_modules/,
         loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
       },*/
      /*  {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
  
          }],
        }*/
    ],
  },
  /*externals: [
    'dtrace-provider'
  ],*/
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      file: path.join(dirname, 'dist', 'index.html'),
      template: './index.html',
      // favicon: "./assets/favicon.ico"
    })
    
    /*new ExtractTextPlugin({
      filename: 'app.bundle.css',
      allChunks: true,
    }),*/

    /*   new CopyWebpackPlugin({
         patterns: [
           { from: 'assets/', to: 'assets/' }
         ]
       }),
       new ImageminPlugin({
         test: /\.(jpe?g|png|gif|svg)$/i,
         disable: process.env.NODE_ENV !== 'production',
   
         pngquant: {
           verbose: true,
           quality: '80-90',
         }
       }),
       new HtmlPlugin({
         file: path.join(__dirname, 'dist', 'index.html'),
         template: './index.html',
         favicon: "./assets/favicon.ico"
       }),*/
    //new webpack.IgnorePlugin(/^pg-native$/),
  ]
}
