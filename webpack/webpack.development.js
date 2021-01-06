/*
  development mode config
 */

const webpack = require('webpack')
const macIp = require('os').networkInterfaces().en0[0].address;
const { resolvePath } = require('./utils')

module.exports = {
  mode: 'development',
  output: {
    filename: `[name].[hash].js`,
    chunkFilename: `chunk/script/[name].[chunkhash].js`
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: resolvePath('public'),
    host: macIp,
    port: 8000,
    inline: true,
    compress: true, //  启动 gzip 压缩
    hot: true,
    // open: true,
    proxy: {

    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}