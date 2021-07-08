import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import mixin from './mixin';

Vue.config.productionTip = false;
Vue.mixin(mixin);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
