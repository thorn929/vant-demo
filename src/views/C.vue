<template>
  <div>ccc</div>
</template>
<script>
export default {
  data() {
    return {}
  },
  // 因为watch 初始化不会执行
  watch: {
    obj: {
      handler(newName, oldName) {
        console.log('obj.a changed');
      },
      // 1. 代表在wacth里声明了obj这个方法之后立即先去执行handler方法
      immediate: true,
      // 2. 比如监听的是一个对象
      deep: true
    }
  },
  created() {
    console.log(1111)
  }
}
</script>