const { merge: webpackMerge } = require('webpack-merge');

const NODE_ENV = process.env.NODE_ENV;

// 开发环境，生产环境共用配置 
const commonWebpackConfig = require('./webpack/webpack.common.js');
// 获取当前运行环境 webpack 配置
const webpackConfigPath = `./webpack/webpack.${NODE_ENV ? NODE_ENV : 'development'}.js`;
const envWebpackConfig = require(webpackConfigPath);

// 合并不同环境下 webpack 配置
module.exports = webpackMerge(commonWebpackConfig, envWebpackConfig);


