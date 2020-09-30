const error = () => import(/*webpackChunkName: 'error'*/'./index.vue')

export default {
    path: '/:catchAll(.*)',
    component: error,
}
