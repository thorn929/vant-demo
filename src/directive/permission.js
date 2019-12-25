export const hasPermission = {
  install (Vue) {
    Vue.directive('hasPermission', {
      bind (el, binding, vnode) {
        // console.log(vnode)
        let permission = ['menu:add']
        let value = binding.value
        let flag = true
        for (let v of value) {
          if (!permission.includes(v)) {
            flag = false
          }
        }
        if (!flag) {
          if (!el.parentNode) {
            el.style.display = 'none'
          } else {
            el.parentNode.removeChild(el)
          }
        }
      }
    })
  }
}