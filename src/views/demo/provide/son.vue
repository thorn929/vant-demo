<template>
  <div>
    son:  {{message}}
  </div>
</template>
<script>
export default {
  // inject: ['message'],
  inject: {
    message: {
      // from: 'father',
      default: 'son默认值'
    }
  },
  created() {
  }
}
</script>