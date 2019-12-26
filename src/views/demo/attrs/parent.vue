<template>
  <div>
    <son :name='name' :age='age' :gender='gender' @test='test'/>
  </div>
</template>
<script>
/**
 * A 与 D 如何通信
 *  1. props 一层层？
 *  2. eventBus？ 
 *  3. Vuex？
 * 
 * arrts:
 *  包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
 *  当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，
 *  并且可以通过 v-bind="$attrs" 传入内部组件
 * 
 * 例子： 假如我想在子组件想获取到父组件的name属性值，在孙子组件获取父组件的age属性值，
 *  用props的话就必须在父组件把name和age的值通过props传递到子组件，子组件在通过props把age的值传递到孙子组件
 *  到这里看明白了吧，孙子组件需要的age在子组件里没有用到，但是为了能让孙子组件获取到，
 *  你必须从父组件 传到子组件，在在子组件传递到孙子组件
 */
import son from './son'
export default {
  components: {
    son
  },
  data() {
    return {
      name: '黄三',
      age: "111",
      gender: '男'
    }
  },
  methods: {
    test(value) {
      console.log(value, ': test--------')
    }
  },
  // mounted() {
  //   this.test('parent')
  // }
}
</script>