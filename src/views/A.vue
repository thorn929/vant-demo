<template>
  <div @click='test'>
    首页
  </div>
</template>
<script>
import { Collapse, CollapseItem } from 'vant'
export default {
  components: {
    [Collapse.name]: Collapse,
    [CollapseItem.name]: CollapseItem   
  },
  data() {
    return {
      activeNames: ['']
    }
  },
  methods: {
    test() {
      this.$router.push('/referer')
    }
  },
  created() {
    console.log(this)
  },
  mounted() {
  }
}
</script>