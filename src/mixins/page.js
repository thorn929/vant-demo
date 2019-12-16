// 如果很多组件都共用， 数据， 方法等， 单独抽出去, 这样就不需要每个都写一遍了
export default {
  data() {
    return {
      publicData: '这是公共数据'
    }
  },
  methods: {
    publicFun() {
      alert('这是一个公共方法')
    }
  }
}
