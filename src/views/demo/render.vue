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
      level: 4
    }
  },
  /**  插槽场景  链接  https://www.jianshu.com/p/6680f5b9090d
   * 假设两个相似的页面，他们只在某一模块有不同的UI效果，以上办法就做不到了。可
   * 能你会想，使用 v-if 和 v-else来特殊处理这两个功能模块，不就解决了？很优秀，解决了，但不完美。
   * 极端一点，假设我们有一百个这种页面，就需要写一百个v-if、v-else-if、v-else来处理？那组件看起来将不再简小精致，维护起来也不容易。
  而 插槽 “SLOT”就可以完美解决这个问题

   */
  components: {
    test: {
      props: ['level'],
      render(createElement) {
        // VNODE
        // 当你不使用 slot 属性向组件中传递内容时，比如 test 中的 Hello world! ，这些子元素被存储在组件实例中的 $slots.default 中。
        return createElement(
          'h' + this.level, 
          this.$slots.default
        )
      }
    }
  }
}
</script>