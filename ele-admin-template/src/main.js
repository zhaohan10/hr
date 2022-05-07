/** 主入口js */
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import permission from './utils/permission';
import './styles/index.scss';
import EleAdmin from 'ele-admin';
import VueClipboard from 'vue-clipboard2';
import i18n from './i18n';
import { MAP_KEY, LICENSE_CODE } from '@/config/setting';


Vue.config.productionTip = false;

Vue.use(EleAdmin, {
  response: {
    dataName: 'list'
  },
  mapKey: MAP_KEY,
  license: LICENSE_CODE,
  i18n: (key, value) => i18n.t(key, value)
});

Vue.use(permission);

Vue.use(VueClipboard);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
