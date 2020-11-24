/*
  打包时使用的工具函数
 */
const path = require('path');

const utils = {
  // 解析路径
  resolvePath(filePath) {
    return path.resolve(process.cwd(), filePath)
  }
}

module.exports = utils;