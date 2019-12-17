<template>
  <div>
    <!-- 需要生成一带锚点的标题，想动态生成标题 (heading) 的组件时，H1-H5 -->
    <!-- <h1>
      <a name="hello-world" href="#hello-world">
        Hello world!
      </a>
    </h1> -->

    <anchored :level="level">
      <a name="hello-world" href="#hello-world">
        Hello world!
      </a>
    </anchored>
  </div>
</template>
<script>
import anchored from './UnAnchored'
export default {
  data() {
    return {
      level: 1
    }
  },
  components: {
    anchored
  }
}
</script>