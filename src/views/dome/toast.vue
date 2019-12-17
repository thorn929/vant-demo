<template>
  <div>
    <button @click="openTop()">top</button>
    <button @click="openCenter()">center</button>
    <button @click="openBottom()">bottom</button>
    <button @click="openLoading()">loading</button>
  </div>
</template>
<script>
export default {
  name: 'app',
   methods:{
    openTop(){
      this.$toast.top('t');
    },
    openCenter(){
      this.$toast.center('c');
    },
    openBottom(){
      this.$toast('bottom1111'); // or 
      // this.$toast.bottom('bottom'); 
    },
    openLoading(){
      this.$loading('loading...');
      let self = this;
      setTimeout(function () {
        self.closeLoading()
      }, 2000)
    },
    closeLoading(){
      this.$loading.close();
    }
  }
}
</script>
