<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
   methods:{
  }
}
</script>

<style lang='less'>
@import './assets/css/normalize.css';
@import './assets/css/animate.css';
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input {
  outline: 0;
}
img {
  content: normal !important;
}
body {
  font-family: 'Ubuntu', -apple-system-font, 'Helvetica Neue', 'PingFang SC',
    'Microsoft YaHei', sans-serif;
  font-size: 16px;
  color: var(--colorMain);
  line-height: 1.2;
  background: #fff;
}
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
/* .error, .loadImg{
  background: url('data:image/png;base64,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')
    no-repeat 50% / 25%;
} */
</style>
