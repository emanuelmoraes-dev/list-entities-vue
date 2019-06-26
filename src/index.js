import 'babel-polyfill'
import 'es6-promise/auto'

import 'open-iconic/font/css/open-iconic.min.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'openwebicons/css/openwebicons.min.css'
import 'glyphicons-only-bootstrap/css/bootstrap-theme.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'assets/css/app.styl'

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
