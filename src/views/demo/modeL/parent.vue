<template>
  <div>
    <div>
      <son :parents='parents' v-model='parents'/>
    </div>
    <div>
     父model： {{parents}}
    </div>
  </div>
</template>
<script>
import son from './son'
export default {
  data() {
    return {
      parents: "父组件数据",
    }
  },
  components: {
    son
  }
}
</script>