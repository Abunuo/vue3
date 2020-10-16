const NotFound = () => import(/*webpackChunkName: 'notFound'*/'./index.vue')

export default {
  name: 'NotFound',
  path: '/:catchAll(.*)',
  component: NotFound,
}
