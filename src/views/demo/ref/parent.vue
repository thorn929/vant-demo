<template>
  <div>
    ref:
    <br>
    父: <span ref='test'>{{parents}}</span>
    <son ref='parents' />
  </div>
</template>
<script>
import son from './son'
export default {
 data() {
    return {
      parents: "父组件数据"
    }
  },
  components: {
    son
  },
  mounted() {
    /** ref
     *   1. ref如果用在子组件，指向的是组件实例，可以理解为对子组件的索引，通过ref可以获取到在子组件里定义的属性的方法
     *   2. 如果ref在普通的DOM元素上使用，引用指向的就是DOM元素，通过$ref可以获取该DOM的属性集合
     * 
     * 区别：
     *  prop着重数据传递，并不能调用子组件里的属性和方法
     *  ref着重与索引，用来调用子组件里的属性方法，而且用ref在dom元素时候，能使用选择器的作用 
     * 
     */
    // ref.1
    this.$refs.parents.sendMessage('父组件ref')
    // ref.2
    console.log(this.$refs.test)
  }
}
</script>