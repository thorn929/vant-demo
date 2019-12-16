<template>
  <div>
    <son :test='test' />
  </div>
</template>
<script>
import son from './son'
export default {
  data() {
    return {
      test: "我是来自父组件"
    }
  },
  components: {
    son
  }
}
</script>