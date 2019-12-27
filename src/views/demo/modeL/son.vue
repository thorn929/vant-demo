<template>
  <div style='border: 1px solid red'>
    <h5>我是子组件</h5>
    <div>子：{{parents}}</div>
    <br>
    <div @click='modifyMessage'>点击利用model修改父组件</div>
  </div>
</template>
<script>
export default {
  model:{
    prop: 'parents', //这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 parents
    event: 'parentEvent' //这个字段，是指父组件监听 parentEvent 事件
  },
  props: ['parents'],
  methods: {
    modifyMessage() {
      this.$emit('parentEvent', "model, 子组件数据")
      // this.$emit('input', "model, 子组件数据")
    }
  }
}
</script>