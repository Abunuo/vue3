# assset
存放全局图片，脚本，样式或字体，组件或者模块使用的应该放到对应文件下，这样利于模块迁移
[https://www.webpackjs.com/guides/asset-management/#加载数据]

## components
全局组件，局部组件应该放到对应文件下

## directions
全局指令

## plugins
自定义插件

## routes
路由管理，在每个文件配置 route.js 文件，用来配置相应的路由，会自动解析引用

## store
全局 store

## views
视图
```
// 目录结构
|-- components
|   └──  **.vue
|-- index.vue
└── route.js
```