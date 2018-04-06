// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/less/font-awesome.less'

import ElementUI from 'element-ui';
Vue.use(ElementUI);

import axios from 'axios'
Vue.prototype.$http = axios

// import VueI18n from 'vue-i18n'
// Vue.use(VueI18n);
// import commonZH from '../src/lang/common.zh'
// import commonEN from '../src/lang/common.en'
// import routingZH from '../src/lang/routing.zh'
// import routingEN from '../src/lang/routing.en'

// const messages = {
//   en:{
//     ...commonEN,
//     ...routingEN,
//   },
//   zh:{
//     ...commonZH,
//     ...routingZH
//   }
// }
// const i18n = new VueI18n({
//   locale: 'en',
//   fallbackLocale:"en",
//   messages
// })

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  // i18n
})


import 'element-ui/lib/theme-chalk/index.css';
import 'assets/css/common.less'
