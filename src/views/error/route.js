const Error = () => import(/*webpackChunkName: 'error'*/'./index.vue')

export default {
  name: 'Error',
  path: '/:catchAll(.*)',
  component: Error,
}
