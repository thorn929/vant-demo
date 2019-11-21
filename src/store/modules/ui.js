export default {
    namespaced: true,
    state: {
      scrollLock: false,
      touchLock: false,
      flexView: true,
      toast: {
        show: false,
        content: '',
        duration: 3000
      },
      dimmer: {
        show: undefined,
        prevent: false,
        inspector: null,
        close: null,
        touchBubble: true
      },
      nav: false,
      footer: false,
      transfer: false,
      loading: false,
      shareTip: {
        show: undefined
      },
      confirm: {
        show: undefined,
        title: '',
        content: '',
        reverse: false, // 反转按钮
        style: 0, // 样式主题
        class: {}, // 附加class
        legend: '', // title上方图示
        submit: {
          text: '',
          callback: null
        },
        cancel: {
          text: '',
          callback: null
        },
      },
      picker: {
        id: '',
        show: undefined,
        selects: [
          {
            selected: 0,
            changed: 0,
            data: [],
            disabled: false,
            events: {
              change: () => {},
              select: () => {},
              cancel: () => {}
            }
          },
          {
            selected: 0,
            changed: 0,
            data: [],
            disabled: false,
            events: {
              change: () => {},
              select: () => {},
              cancel: () => {}
            }
          },
          {
            selected: 0,
            changed: 0,
            data: [],
            disabled: false,
            events: {
              change: () => {},
              select: () => {},
              cancel: () => {}
            }
          }
        ]
      }
    },
    mutations: {
      changeToast(state, payload) {
        const key = payload.type
        const value = payload.data
        if (key) {
          state.toast[key] = value
          state.toast.show = value
        } else {
          if (payload.show === undefined) {
            payload.show = !!payload.content
          }
          state.toast = payload
        }
      },
      changeDimmer(state, val) {
        if (typeof val === 'boolean') {
          state.dimmer.show = val
        } else {
          if (val.touchBubble === undefined) {
            val.touchBubble = true
          }
          state.dimmer = val
        }
      },
      changeShareTip(state, val) {
        state.shareTip = val
      },
      changeFooter(state, val) {
        state.footer = val
      },
      changeNav(state, val) {
        state.nav = val
      },
      changeConfirm(state, payload) {
        if (typeof payload === 'boolean') {
          state.confirm.show = payload
        } else {
          state.confirm = payload
        }
      },
      changeLoading(state, val) {
        state.loading = val
      },
      changeTransfer(state, val) {
        state.transfer = val
      },
      changePicker(state, val) {
        state.picker = Object.assign(state.picker, val)
      },
      changePickerProperty(state, payload) {
        if (payload.index === undefined) {
          state.picker[payload.key] = payload.value
        } else {
          state.picker.selects[payload.index][payload.key] = payload.value
        }
      },
      changeTouchLock(state, val) {
        // 修复 iOS 嵌套 position fixed; z-index 失效问题
        state.touchLock = val
      },
      changeScrollLock(state, val) {
        state.scrollLock = val
        const body = document.body
        const classname = state.flexView ? 'scroll--lock--fixed' : 'scroll--lock'
        const reverseClassname = !state.flexView ? 'scroll--lock--fixed' : 'scroll--lock'
        if (val) {
          body.classList.remove(reverseClassname)
          body.classList.add(classname)
        } else {
          body.classList.remove(classname)
        }
      },
      changeFlexView(state, val) {
        if (val === undefined) {
          val = true
        }
        state.flexView = val
        const body = document.body
        if (val) {
          body.classList.add('flexView')
        } else {
          body.classList.remove('flexView')
        }
      }
    }
  }
  