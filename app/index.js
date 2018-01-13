import 'babel-polyfill';
import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import routes from './pages/routes';
import CurrencyInput from 'app/components/currency-input/index';
import ElementUI from 'element-ui';
import LPDComponent from '@ele/lpd-component';
import '@ele/lpd-component/lib/theme.min.css';
import 'element-ui/lib/theme-default/index.css';

import store from './store/index';

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.use(CurrencyInput);
Vue.use(LPDComponent);

const router = new VueRouter({
  routes,
  mode: 'hash'
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
