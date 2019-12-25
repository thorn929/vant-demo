import Vue from 'vue'
import App from './App.vue'
import http from './assets/js/http'
import router from './router'

import Toast from './assets/js/toast'
import './assets/css/toast.css'
import './directive/demo'
import './directive/install'

Vue.use(Toast)
Vue.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
