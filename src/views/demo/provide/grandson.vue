<template>
  <div>
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