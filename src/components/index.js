/**
 * 批量注册插件，默认只挂载各文件夹下的 global.vue
 * 区分 button.vue 类似的文件
 * 
 */

const requireDirective = require.context(
  // 其组件目录的相对路径
  './',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.\/.+\/global\.vue$/
)

function install(app) {
  requireDirective.keys().forEach(fileName => {
    let component = requireDirective(fileName).default;
    if (!component.name) {
      throw new TypeErrorr('component.name is required');
    };
    app.component(component.name, component)
  })
}

export default install;