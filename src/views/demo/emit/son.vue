<template>
  <div style='border: 1px solid red'>
    <h5>我是子组件</h5>
    <div>子：{{parents}}</div>
    <div style='border: 1px solid red' @click='sonFun'>子: 点击触发父组件</div>
    <br>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['parents'],
  methods: {
    sonFun() {
      this.$emit('fatherFun')
    }
  },
  mounted() {
    // 场景：子组件关闭父组件弹框
    // 1. 子组件修改父组件, 获取父实例的方法和属性
    // this.$parent.parentMethod()
    this.$parent.parents = 'this.$parent.parents，son===='
    // 2. 子 update 父sync
    // this.$emit('update:parents', '子sync： 我要更新父组件')
    // 3. 子 emit && 父on 
    // this.$emit('modifyMessage', '我是子组件emit/on， 我想修改父组件的值')
  }
}
</script>