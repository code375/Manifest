// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/styles/global.css';

import Vue from 'vue';
import Header from '@/components/Header';
import Tasks from '@/components/Tasks';
import Join from '@/components/Join';
import FAQ from '@/components/FAQ';
import Rules from '@/components/Rules';

import router from './router';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#header',
  router,
  components: { Header },
  template: '<Header/>',
});
/* eslint-disable no-new */
new Vue({
  el: '#tasks',
  router,
  components: { Tasks },
  template: '<Tasks/>',
});
/* eslint-disable no-new */
new Vue({
  el: '#join',
  router,
  components: { Join },
  template: '<Join/>',
});
/* eslint-disable no-new */
new Vue({
  el: '#faq',
  router,
  components: { FAQ },
  template: '<FAQ/>',
});
/* eslint-disable no-new */
new Vue({
  el: '#rules',
  router,
  components: { Rules },
  template: '<Rules/>',
});
