/**
 * 批量注册插件，默认只加载各文件夹下的 index.js
 * 
 */

const requireDirective = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.\/.+\/index\.js$/
)

function install(app) {
  requireDirective.keys().forEach(fileName => {
    let plugin = requireDirective(fileName);
    app.config.globalProperties[plugin.name] = plugin.default
  })
}

export default install;