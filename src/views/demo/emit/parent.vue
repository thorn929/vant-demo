<template>
  <div>
    <div>
      父：{{parents}}
      <!-- parent || emit/on -->
      <son :parents='parents' @fatherFun='sonFun' @modifyMessage='modifyMessage'/>
      <!-- sync -->
      <!-- <son :parents.sync='parents'/> -->
      <!-- 这里的$event就是子组件$emit传递的参数  -->
      <!-- parents="parents" @update:parents="parents = $event" -->
    </div>
    <br>
  </div>
</template>
<script>
import son from './son'
export default {
  data() {
    return {
      parents: "父组件数据",
    }
  },
  components: {
    son
  },
  methods: {
    modifyMessage(value) {
      this.parents = value
    },
    parentMethod() {
      console.log('我是来自父组件的方法')
    },
    sonFun() {
      console.log('子触发了父')
    }
  }
}
</script>