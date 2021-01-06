import { createApp } from 'vue'

// 引入公共样式
import './assets/styles/index.scss';

// 加载入口
import App from './App.vue'

// 引入 route，store
import route from './routes/index'
import store from './store/index'

// 引入全局指令、插件、组件
import directives from './directives/index';
import plugins from './plugins/index'
import compontents from './components/index'

const app = createApp(App);

app
  .use(route)
  .use(store)
  .use(compontents)  // 全局组件  eg. 
  .use(directives)   // 全局指令  eg. v-input-number/v-longpress
  .use(plugins)      // 全局插件  eg. $message
  .mount('#app');
