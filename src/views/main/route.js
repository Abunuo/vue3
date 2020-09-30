const main = () => import(/*webpackChunkName: 'main'*/'./index.vue');

export default {
  path: '/',
  component: main
}