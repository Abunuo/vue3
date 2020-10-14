/*
  打包时使用的工具函数
 */
const path = require('path');

const utils = {
  resolvePath(filePath) {
    return path.resolve(process.cwd(), filePath)
  },
}

module.exports = utils;