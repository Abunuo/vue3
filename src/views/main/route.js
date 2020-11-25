import { defineAsyncComponent } from 'vue'
const Main = defineAsyncComponent(() => import(/*webpackChunkName: 'main'*/'./index.vue'));

export default {
  name: 'Main',
  path: '/',
  component: Main
}