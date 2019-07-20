import Vue from 'vue'
import App from './App.vue'

//Роутер
import VueRouter from 'vue-router'
import router from './router/router'
Vue.use(VueRouter)
//
Vue.config.productionTip = false


import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
Vue.use(axios)

import store from './store/index'


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
