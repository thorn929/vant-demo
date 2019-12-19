<template>
  <div>
    <!-- 不但代码冗长，而且在每一个级别的标题中重复书写了 <slot></slot>，在要插入锚点元素时还要再次重复。 -->
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-if="level === 6">
      <slot></slot>
    </h6>
  </div>
</template>
<script>
export default {
  props: ['level']
}
</script>