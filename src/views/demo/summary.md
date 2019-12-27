### 子修改父
```
 // 场景：子组件关闭父组件弹框
    // 1. 子组件修改父组件, 获取父实例的方法和属性
    // this.$parent.parentMethod()
    //  this.$parent.parents = 'son，===='
    // 2. 子 update 父sync
      // this.$emit('update:parents', '我要更新父组件')
    // 3. 子 emit && 父on 
    // this.$emit('modifyMessage', '我是子组件， 我想修改父组件的值')
    // 4. model 
    // this.$emit('parentEvent', "model===")
```

### 通信场景
+ 父子通信：props; $parent / $children; provide / inject ; ref ; $attrs / $listeners
+ 兄弟通信：eventBus ; vuex
+ 跨级通信： eventBus；Vuex；provide / inject 、$attrs / $listeners