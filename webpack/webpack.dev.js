const common = require('./webpack.common.js')
const path = require('path')
const { merge } = require('webpack-merge');

//const dirname = path.resolve(__dirname, '../')
module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    port: 8080,
    hot: true,
    host: '192.168.31.16',
    disableHostCheck: true,
  },
  plugins: [

  ],

})