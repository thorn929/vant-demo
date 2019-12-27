<template>
  <div style='border: 1px solid red'>
    <h5>我是子组件</h5>
    <div>子：{{parents}}</div>
    <br>
    <div @click='sendBrother'>点击向兄弟组件传值</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  // props: ['parents'],
  props: {
    // 推荐
    parents: {
      type: [String, Number],
      required: false,
      default: 'props为传值，此为默认值'
    }
  },
  methods: {
    sendBrother() {
      this.$bus.$emit("comData", "son组件，给兄弟组件传值了")
    }
  },
  mounted() {
    // 场景：子组件关闭父组件弹框
    // 1. 子组件修改父组件, 获取父实例的方法和属性
    // this.$parent.parentMethod()
    //  this.$parent.parents = 'son，===='
    // 2. 子 update 父sync
      // this.$emit('update:parents', '我要更新父组件')
    // 3. 子 emit && 父on 
    // this.$emit('modifyMessage', '我是子组件， 我想修改父组件的值')
    // 4. model 
    // this.$emit('parentEvent', "model===")
  }
}
</script>