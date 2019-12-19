<template>
  <div style='border: 1px solid red;'>
    <!-- v-if 元素不渲染到HTML -->
    <div v-if='1 === 2'>v-if</div>

    <!-- v-show  元素始终渲染到HTML  -->
    <div v-show='1 == 2'>v-show</div>

    <!-- v-bind 绑定属性 。  -->
    <!-- 动态地绑定一个或多个特性 -->
    <img v-bind:src='url' />
    <img :src='url' />
    <div :class="{ red: isRed }"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>

    <!-- prop -->
    <son :temData='temData'/>
    
    <!-- v-on 绑定方法 -->
    <div v-on:click='test'>click</div>
    <div @click='test'>click</div>

    <!-- v-html 输出真正的html，类似于jquery text方法 -->
    <div v-html='html'></div>

    <!-- v-text 将数据解析为纯文本，不能输出真的的html， 与花括号区别是在页面加载时不显示 -->
    <!-- 待定：：：： -->
    <!-- {{}}当我们网速很慢或者 javascript 出错时，会暴露我们的{{xxx}} -->
    <!-- v-text渲染数据的时候，是渲染全部的数据 -->
    <div v-text='text'></div>
    <div>{{obj.a}}</div>

    <!-- 比如需要只渲染一次的，降低开销 -->
    <div v-once>
      <!--  -->
    </div>
  </div>
</template>
<script>
/**
 * v-if 有更高的切换开销  v-show 有更高的初始渲染开销
 * 如果频繁使切换 v-show较好
 */
export default {
  data() {
    return {
      temData: 1,
      html: "<span>html标签在渲染的时候被解析</span>",
      text: "<span>html标签在渲染的时候被源码输出</span>",
      obj: {
        a: 1
      }
    }
  }
}
</script>