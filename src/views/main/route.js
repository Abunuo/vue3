const Main = () => import(/*webpackChunkName: 'main'*/'./index.vue');

export default {
  name: 'Index',
  path: '/',
  component: Main
}