<template>
  <div style='border: 1px solid red'>
    <h5>我是子组件</h5>
    <div>子：{{parents}}</div>
    <br>
    <div @click='modifyMessage' v-if="isModel">点击利用model修改父组件</div>
  </div>
</template>
<script>
export default {
  model:{
    prop: 'parents', //这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 parents
    event: 'parentEvent' //这个字段，是指父组件监听 parentEvent 事件
  },
  data () {
    return {
      son: 'sonData'
    }
  },
  // props: ['parents'],
  props: {
    // 推荐
    parents: {
      type: [String, Number],
      required: false,
      default: 'props为传值，此为默认值'
    },
    isModel: {
      type: Boolean
    }
  },
  methods: {
    sendMessage(value) {
      console.log('这里是ref', value)
    },
    modifyMessage() {
      // 更改双向的
      this.$emit('parentEvent', "model, 子组件数据")
      // 更改父组件的
      // this.$emit('input', "model, 子组件数据")
    }
  },
  mounted() {
    // 场景：子组件关闭父组件弹框
    // 1. 子组件修改父组件
    //  this.$parent.parents = 'son，===='
    // 2. 子 update 父sync
      // this.$emit('update:parents', 'son')
    // 3. 子 emit && 父on 
    this.$emit('modifyMessage', '我是子组件， 我想修改父组件的值')
    // 4. model 
    // this.$emit('parentEvent', "model===")
  }
}
</script>