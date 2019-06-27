import 'babel-polyfill'
import 'es6-promise/auto'

import Vue from 'vue'
import router from './router'
import App from './App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'
import $ from 'jquery'
window.jQuery = $
window.$ = $

Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(BootstrapVue)

axios.defaults.withCredentials = true

Vue.prototype.$eventHub = new Vue({})

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
