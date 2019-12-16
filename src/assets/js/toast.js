const Toast = {
  install(Vue, options) {
    const defaultOption = {
      type: 'bottom',
      duration: '2000'
    }
    // toastTimer:存储toast定时器id; toastVM:存储toast vm
    let [timer, toastVM] = [false, null]

    Vue.prototype.$toast = (tip, config) => {
      let option = {}
      Object.assign(option, defaultOption, options)
      if(typeof config === 'object'){
        Object.assign(option, config)
      }else if(config){
        option['type'] = config
      }
      if (timer) {
        // 如果toast还在，则取消上次消失时间
        clearTimeout(timer)
        toastVM.show = false
      }
      if(!toastVM){
        const toastTpl = Vue.extend({  // 1、创建构造器，定义好提示信息的模板
          data(){
            return {
              show: false,
              tip,
              type: option.type
            }
          },
          render(h){
            if(!this.show){
              return false
            }
            return h(
              'div',
              {
                class: ['lx-toast', `lx-toast-${this.type}`],
                show: this.show,
                domProps: {
                  innerHTML: this.tip
                }
              }
            )
          }
        })
        toastVM = new toastTpl()
        const tpl = toastVM.$mount().$el   // 2、创建实例，挂载
        document.body.appendChild(tpl)
      }

      toastVM.tip  = tip
      toastVM.type = option.type
      toastVM.show = true

      timer = setTimeout(() => {
        toastVM.show = timer = false
      }, option.duration)
    }
    ['top', 'center', 'bottom'].forEach(type => {
      Vue.prototype.$toast[type] = tips => {
        return Vue.prototype.$toast(tips, type)
      }
    })


    //showLoad:存储loading显示状态; loadNode:存储loading节点元素;
    let [showLoad, loadNode] = [false, null];
      /**
     * loading方法
     * @param {*string} tip 提示文本
     * @param {*string} type loading类型，可选open/close
     */
    Vue.prototype.$loading = (tip, type) => {
      if(type === 'close'){
          if(loadNode){
              loadNode.show = showLoad = false;
          }
      }else{
          if(showLoad && loadNode){
              showLoad.tip = tip;
              return false;
          }
          const loadTpl = Vue.extend({
              data(){
                  return {
                      show: false,
                      tip
                  }
              },
              render(h){
                  if(!this.show){
                      return
                  }
                  return h('div', {
                      class: 'lx-load-mark',
                      show: this.show
                  },[
                      h('div', {
                          class: 'lx-load-box'
                      }, [
                          h('div', {
                              class: this.tip?'lx-loading':'lx-loading-nocontent'
                          }, Array.apply(null, {length: 12}).map((value, index) => {
                              return h('div', {
                                  class: ['loading_leaf',`loading_leaf_${index}`]
                              })
                          })),
                          h('div', {
                                class: 'lx-load-content',
                                domProps: {
                                    innerHTML: this.tip
                                }
                            })
                        ])
                    ])
                }
            });
            loadNode = new loadTpl();
            const tpl = loadNode.$mount().$el;

            document.body.appendChild(tpl);
            loadNode.show = showLoad = true;
        }
    };

    ['open', 'close'].forEach(type => {
      Vue.prototype.$loading[type] = tip => {
        return Vue.prototype.$loading(tip, type);
      }
    })
  }
}
export default Toast