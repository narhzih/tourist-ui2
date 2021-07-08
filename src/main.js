import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';
import mixin from './mixin';
import Flutterwave from 'flutterwave-vue-v3';
export const eventBus = new Vue();

Vue.config.productionTip = false;
Vue.mixin(mixin);
Vue.use(Flutterwave, {
  publicKey: 'FLWPUBK_TEST-e85370dafc8f0f9792f40fda2aa847a0-X',
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
