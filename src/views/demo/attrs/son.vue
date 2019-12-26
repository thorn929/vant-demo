<template>
  <div >
    <p>name: {{ name }}</p>
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
  created() {
    console.log('sonAttrs', this.$attrs);
  },
  mounted() {
    this.$emit('test', 'son')
  }
};
</script>