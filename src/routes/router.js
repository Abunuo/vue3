/**
 * 加载各组件的 route.js
 * 
 */
import Vue from 'vue';

const requireDirective = require.context(
  // 其组件目录的相对路径
  '../views/',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /route\.js$/
)
const routes = []

requireDirective.keys().forEach(fileName => {
  let directive = requireDirective(fileName);
  routes.push(directive.default)
})

export default routes;

