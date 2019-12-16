<template>
  <div>
    <!-- 永远不要把v-if和v-for同时放在一个元素上；  v-for 更高的优先级-->
    <!-- 例子：如果只是需要某个元素存在才显示，可以考虑计算属性 -->
    <div v-for='(item, $index) in list' :key='$index'>
      <!-- <tepmplate /> -->
      {{item.a}}
    </div>

    <!-- <template v-for='(item, index) in list' > 
      <div :key='index'>{{item}}</div>
    </template> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          a: "a"
        },
        {
          a: 'aaa',
          b: 'b'
        }
      ]
    }
  },
  // computed: {
  //   test() {
  //     return this.list
  //   }
  // }
}
</script>