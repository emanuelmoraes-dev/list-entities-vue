import 'bootstrap-vue/dist/bootstrap-vue.css' // css da lib 'bootstrap-vue'
import 'font-awesome/css/font-awesome.min.css' // lib 'font-awesome' de ícones
import 'ionicons/dist/css/ionicons.min.css' // lib 'ionicons' de ícones
import '../assets/css/vuestic.css' // css do template vuestic encapsulada pela classe 'wrapper-list-entities-vue'
import '../assets/css/style.css' // definições globais de css com  o wrapper 'wrapper-list-entities-vue'

import Vue from 'vue'
import app from './App.vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
	render: h => h(app)
}).$mount('#app')
