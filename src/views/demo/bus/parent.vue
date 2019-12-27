<template>
  <div>
    <son :parents='parents' />
    <br>
    <div style='border: 1px solid blue'>
      brother:
      <brother />
    </div>
  </div>
</template>
<script>
import son from './son'
import brother from './brother'
export default {
  data() {
    return {
      parents: "父组件数据"
    }
  },
  components: {
    son,
    brother
  }
}
</script>