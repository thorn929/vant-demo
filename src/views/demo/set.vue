<template>
  <div>
    <div @click='_trigger'>点击触发, {{obj}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: {
        a: 1
      }
    }
  },
  methods: {
    _trigger() {
      this.$set(this.obj, 'b', 2)
    }
  },
  mounted() {
    /**
     * 官网： https://cn.vuejs.org/v2/guide/reactivity.html#
     *   受现代 JavaScript 的限制 (而且 Object.observe 也已经被废弃)，
     *   Vue 无法检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，
     *   所以属性必须在 data 对象上存在才能让 Vue 将它转换为响应式的，
     *   对于已经创建的实例，Vue 不允许动态添加根级别的响应式属性
     *   
     *   由于 Vue 不允许动态添加根级响应式属性，所以必须在初始化实例前声明所有根级响应式属性，哪怕只是一个空值
     * 
     *   也就是说 当生成vue实例后，你还想再次数据赋值，并更新视图时候，那么你就需要用set了
     */
    // this.obj.b = 2
    // this.$set(this.obj, 'b', 2)
  }
}
</script>