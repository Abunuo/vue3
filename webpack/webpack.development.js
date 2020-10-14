/*
  development mode config
 */

const webpack = require('webpack')
const macIp = require('os').networkInterfaces().en0[0].address;
const { resolvePath } = require('./utils')

// 读取当前运行环境下的全局变量
const definePlugin = require(resolvePath('.env.development'));

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
    hot: true,
    // open: true,
    proxy: {

    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin(definePlugin),
    new webpack.HotModuleReplacementPlugin()
  ]
}