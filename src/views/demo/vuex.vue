<template>
  <div>
   <h3>vuex</h3>
    是否登录： {{isLogin}} 
    <div @click='changeUser'>
      点击更换名字： {{this.$store.state.account.user.name}}
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
  /**
   * 核心：
   *   state: 用于数据的存储，是store中唯一的数据源
   *     this.$store.state.xxx || mapState
   *   getters： 如vue计算属性一样，基于state数据的二次包装，常用在数据筛选和多个数据相关性计算
   *     this.$store.getters.xxx || mapGetters
   *   mutations： 类似函数，改变state数据的唯一途径，且不能用于处理异步事件
   *     this.$store.commit('xxx') || mapMutations 辅助函数将组件中methods映射为store.commit调用
   *   actions: 类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
   *     this.$store.dispatch('xxxx') || mapActions
   *   
   * 辅助函数：
   *   当项目中我们需要大量的调用state中的值和触发多个actions的时候，这时候辅助函数的作用就体现出来了，语法糖
   * 
   * 注意：
   *   mapState && mapGetter 的使用只能在computed计算属性中， 创建计算属性返回
   *   mapMutations && mapActions 只能再methods方法中调用，也就是创建了方法
   */
  data() {
    return {}
  },
  computed: {
    isLogin() {
      return this.$store.state.account.isLogin
    },
    // ...mapState('account', {
    //   funIsLogin: state => state.isLogin
    // }),
  },
  methods: {
    // ...mapMutations({test: 'account/setUser'}),
    changeUser() {
      this.$store.commit('account/setUser', {name: '李四'})
      // this.test({name: 11})
    }
  },
  mounted() {
    console.log(this.$store.getters['account/doneTodos'])
  }
}
</script>