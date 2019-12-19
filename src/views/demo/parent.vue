<template>
  <div>
    <div ref='parent'>{{parent}}</div>
    <son :test='test'/>
    <!-- <son :parent.sync='parent'/> -->
  </div>
</template>
<script>
import son from './son'
export default {
  data() {
    return {
      test: "我是来自父组件",
      parent: "parent-----"
    }
  },
  components: {
    son
  },
  mounted() {
  }
}
</script>