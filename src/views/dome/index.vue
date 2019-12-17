<template>
  <div>
    dome
     == {{list}} ==
     <div @click='test'> test</div>
  </div>
</template>
<script>
import page from '@/mixins/page'
export default {
  mixins: [page],
  data() {
    return {
      list: [1, 2]
    }
  },
  methods: {
    test() {
      this.list.push(33)
    }
  },
  mounted() {
    console.log(this.publicData)
    // this.publicFun()
  }
}
</script>