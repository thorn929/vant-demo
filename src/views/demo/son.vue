<template>
  <div>
    我是子组件
    <div>{{test}}</div>
  </div>
</template>
<script>
export default {
  // props: ['test'],
  props: {
    // 指定
    test: {
      type: [String, Number],
      default: '111'
    },
    // 多种
    a: [String, Number]
  },
  mounted() {
    // 场景：子组件关闭父组件弹框
    // 1. 子组件修改父组件
    //   this.$parent.parent = 'son，===='
    // 2. 子 update 父sync
    //   this.$emit('update:parent', 'son')
    // 3. 子emit && 父on 不推荐
  }
}
</script>