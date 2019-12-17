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
    test: {
      type: [String, Number],
      default: '111'
    },
    a: [String, Number]
  }
}
</script>