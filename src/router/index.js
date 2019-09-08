import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/containers/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/volounter',
      name: 'Volounter',
    },
    {
      path: '/tasks',
      name: 'Tasks'
    },
  ],
});
