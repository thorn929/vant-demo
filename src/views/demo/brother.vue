<template>
  <div>
    brother: {{message}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  created() {
    this.$bus.$on("comData", data => {
      console.log(data, 'brother')
      this.message = data
    })
  },
  beforeDestroy () {
    // 注册的 Bus 要在组件销毁时卸载，否则会多次挂载，造成触发一次但多个响应的情
    // this.$bus.$off('comData', this.message);
  }
}
</script>