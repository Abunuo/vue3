const path = require('path');
const macIp = require('os').networkInterfaces().en0[0].address;

function resolvePath(filePath) {
  return path.resolve(process.cwd(), filePath)
}

module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
}