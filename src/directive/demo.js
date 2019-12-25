
import Vue from 'vue'
const pin = {
  bind: function (el, binding, vnode) {
    el.style.color = "red"
    el.style.border = `${binding.value}px solid`
  }
}
Vue.directive('pin', pin)
export default pin