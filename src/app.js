import { createApp } from 'vue'

import route from './routes/index'
import store from './store/index'
import App from './App.vue'


createApp(App)
  .use(route)
  .use(store)
  .mount('#app')