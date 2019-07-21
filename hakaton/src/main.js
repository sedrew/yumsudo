import Vue from 'vue'
import App from './App.vue'

import Document from './components/Document.vue'
Vue.component('document', Document)
import Nav from './components/Navbar.vue'
Vue.component('Nav', Nav)
import Login from './components/Login.vue'
Vue.component('login', Login)
import Card from './components/Card.vue'
Vue.component('card', Card)
import Table from './components/Table.vue'
Vue.component('tables', Table)
//Роутер
import VueRouter from 'vue-router'
import router from './router/router'
Vue.use(VueRouter)
//
import VAnimateCss from 'v-animate-css';
Vue.use(VAnimateCss);
Vue.config.productionTip = false


import SlideUpDown from 'vue-slide-up-down'
Vue.use(SlideUpDown)
Vue.component('slide', SlideUpDown)


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
