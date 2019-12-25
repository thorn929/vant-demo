<template>
  <div>
    <p v-for='(item, $index) in list' :key='$index' @click='link(item)'>
      {{$index}}. {{item}}
    </p>
  </div>
</template>
<script>
import page from '@/mixins/page'
export default {
  mixins: [page],
  data() {
    return {
      list: ['instruct', 'parent', 'for', 'toast', 'nextTick', 'render', 'unRender', 'directive']
    }
  },
  methods: {
    link(item) {
      this.$router.push(item)
    }
  },
  mounted() {
    // mixins
    // console.log(this.publicData)
    // this.publicFun()
  }
}
</script>