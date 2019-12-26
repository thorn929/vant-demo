<template>
  <div style='border:2px solid purple'>
    son:  {{message}}
    <grandson />
  </div>
</template>
<script>
import grandson from './grandson'
export default {
  // inject: ['message'],
  inject: {
    message: {
      // from: 'father',
      default: 'son默认值'
    }
  },
  components: {
    grandson
  },
  created() {
  }
}
</script>