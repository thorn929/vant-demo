import Vue from 'vue'
import App from './App.vue'
import http from './assets/js/http'
import router from './router'
import store from './store'

import Toast from './assets/js/toast'
import './assets/css/toast.css'
import './directive/demo'
import './directive/install'

Vue.prototype.$bus = new Vue()

Vue.use(Toast)
Vue.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
