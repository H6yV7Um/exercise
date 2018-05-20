import 'babel-polyfill';
import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import routes from './pages/routes';
import CurrencyInput from './components/currency-input/index';
import ElementUI from 'element-ui';
import LPDComponent from '@ele/lpd-component';
import '@ele/lpd-component/lib/theme.min.css';
import 'element-ui/lib/theme-default/index.css';

import store from './store/index';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

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
