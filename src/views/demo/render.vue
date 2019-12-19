<template>
  <div>
    <!-- 动态标签。 动态组件 && :is -->
    <test :level="level"> render: Hello world!</test>
  </div>
</template>
<script>
export default {
  data() {
    return {
      level: 1
    }
  },
  //
  components: {
    test: {
      props: ['level'],
      render(createElement) {
        return createElement(
          'h' + this.level, 
          this.$slots.default
        )
      }
    }
  }
}
</script>