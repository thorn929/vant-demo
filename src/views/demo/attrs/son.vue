<template>
  <div style='border: 2px solid blue'>
    <p>son的name: {{ name }}</p>
    <p>son的$attrs: {{ $attrs }}</p>
    <grandson v-bind='$attrs' v-on="$listeners" />
  </div>
</template>
<script>
import grandson from './grandson'
export default {
  components: {
    grandson
  },
  props: ['name'],
  // 阻止默认行为 默认情况下父作用域的不被认作 props 的特性绑定， 将会“回退”且作为普通的 HTML 特性应用在子组件的根元素上
  inheritAttrs: false, // 当写包裹一个目标元素或另一个组件的组件时，这可能不会总是符合预期行为
  created() {
    // $attrs为组件标签内没有在组件内用props声明的属性（除style和class外）
    console.log('sonAttrs', this.$attrs);
  },
  mounted() {
    this.$emit('test', 'son')
  }
};
</script>