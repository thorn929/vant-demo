<template>
  <div style='border: 1px solid red'>
    grandson:  {{message}}
  </div>
</template>
<script>
export default {
  inject: ['message'],
  created() {
  }
}
</script>