<template>
  <div>
    <!-- 你需要对普通DOM元素进行底层操作，这时候就需要用到自定义指令! -->
    <!-- loading图 -->
    <p v-pin>全局directive</p>
    <p v-pin="2">全局传参directive</p>
    <p v-test>局部指令</p>
    <div v-hasPermission="['menu:add']">权限指令</div>
  </div>
</template>
<script>
export default {
  /**
   * bind: 只调用一次，指令第一次绑定到元素时调用，在这里可以进行一次性的初始化设置（用的最多）
   * inserted： 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）
   * update： 所在组件的VNode更新时调用
   * componentUpdated： 指令所在组件的VNode 及其子VNode 全部更新后调用
   * unbind：只调用一次，指令在元素解绑时调用
   */
  //局部指令
  directives:{
    test: {
      bind: function (el, binding, vnode) {
        el.style.color = "red"
        console.log('1 - bind')
      },
      // inserted: function(el, binding, vnode) {
      //   console.log('2 - inserted')
      // },
      // update: function(el, binding, vnode, oldVnode) {
      //   console.log('3 - update')
      // },
      // componentUpdated: function(el, binding, vnode, oldVnode) {
      //   console.log('4 - componentUpdated')
      // },
      // unbind: function(el, binding, vnode) {
      //   console.log('5 - unbind')
      // }
    }
  }
}
</script>