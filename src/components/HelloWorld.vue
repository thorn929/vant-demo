<template>
  <div class="hello">
    <h1 :class='$style.a'>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style lang='less' module>
.a {
  border: 2px solid red;
}
h1.ignore {
  border: 2px solid red;
}
</style>
