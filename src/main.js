import 'bootstrap-vue/dist/bootstrap-vue.css' // css da lib 'bootstrap-vue'
import '../lib/vuestic/css/vuestic.css' // css do template vuestic encapsulada pela classe 'wrapper-list-entities-vue'
import '../lib/fontawesome/css/all.min.css' // css da lib de ícones 'fontawesome'
import '../assets/css/style.css' // definições globais de css com  o wrapper 'wrapper-list-entities-vue'

import Vue from 'vue'
import app from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import plugin from '../index'

Vue.use(plugin, { lang: 'pt' })
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
	render: h => h(app)
}).$mount('#app')
