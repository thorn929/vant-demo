<template>
  <div>
    dom
  </div>
</template>
<script>
import page from '@/mixins/page'
export default {
  mixins: [page],
  mounted() {
    console.log(this.publicData)
    // this.publicFun()
  }
}
</script>