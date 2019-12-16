<template>
  <div>
    <input type="text" v-show='show' ref='input' id='keywords' />
    <button @click="_show">获取焦点</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    /**
     * vue 是异步执行Dom更新的（https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97）
     * 异步：
     *  （1）所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
     *  （2）主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
     *  （3）一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
     *  （4）主线程不断重复上面的第三步。
     */
    // 简单来说，Vue 在修改数据后，视图不会立刻更新，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。
    _show() {
      this.show = true
      // 
      // document.getElementById("keywords").focus()
      this.$refs.input.focus()
      this.$nextTick(()=>{
        // dom元素更新后执行
        // document.getElementById("keywords").focus()
        // this.$refs.input.focus()
      })
    }
  }
}
</script>