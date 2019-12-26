<template>
  <div style='border: 1px solid red'>
    <p>age: {{ age}} </p>
    <p>grandson的attrs: {{ $attrs }}</p>
  </div>
</template>
<script>
export default {
  props: {
    age: String
  },
  created() {
    console.log('grandsonAttrs', this.$attrs)
    this.$emit('test', 'grandson')
  }
};
</script>