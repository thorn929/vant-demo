<template>
  <div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
    </van-collapse>
    <div :style='{transform:`translate(${1}px, ${2}px)`}'>test</div>
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
  }
}
</script>