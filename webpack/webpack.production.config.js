const path = require('path');
// 打包的时候讲 public 目录下面 index.html 迁移到 dist 下面
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清楚目录使用
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function resolvePath(filePath) {
  return path.resolve(process.cwd(), filePath)
}

module.exports = {
  mode: 'production',
  plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({  // 打包的时候讲 public 目录下面 index.html 迁移到 dist 下面
       template: resolvePath('public/index.html')
     }),
  ]
}