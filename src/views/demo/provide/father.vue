<template>
  <div>
    father: {{message}}
    <div @click='modify'>点击修改数据</div>
    <son />
    <grandson />
  </div>
</template>
<script>
import son from './son'
import grandson from './grandson'
export default {
  /** 
   * 官网：https://cn.vuejs.org/v2/api/#provide-inject
   *   provide & inject 主要为高阶插件/组件库提供用例。并不推荐直接用于应用程序代码中。与React上下文特性很相似
   * 提示：
   *   provide 和 inject 绑定并不是可响应的。这是刻意为之的
   *   如果你传入了一个可监听的对象，那么其对象的属性还是可响应的。
   * 
   *   来实现简单的vuex状态管理功能, 适合做一次性全局的状态数据管理
   */
  // provide: {
  //   message: "father"
  // },
  provide () {
    return {
      message: this.message
    }
  },
  data() {
    return {
      message: 'fatherData'
    }
  },
  components: {
    son,
    grandson
  },
  methods: {
    modify() {
      this.message = 'test'
    }
  }
}
</script>