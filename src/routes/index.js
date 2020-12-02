import { createRouter, createWebHistory } from 'vue-router'

import routes from './router';
/*
    mode： createWebHashHistory(#)(default)、createWebHistory、createMemoryHistory
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    next();
    return;
  }
  next()
})

export default router;
