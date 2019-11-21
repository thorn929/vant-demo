import axios from 'axios'
import Cookies from 'js-cookie'
import store from '@/store/index'

let API
let baseURL = 'test' // 模拟 {mock} 开发 {dev} 测试 {test} 正式 {server}
switch (baseURL) {
  case 'mock':
    API = 'https://www.easy-mock.com/mock/5d5fae1ef4427537d64d5ee5/example/'
    break
  case 'dev':
    API = 'http://10.10.21.12:8888/backend/'
    break
  case 'test':
    API = 'http://followup.yibojk.com/backend/'
    break
  case 'server':
    API = 'https://localhost:8888/'
    break
}

axios.defaults.baseURL = API

axios.interceptors.request.use(
  function(config) {
    if (config.mock && config.mock.enable && process.env.NODE_ENV === 'development') {
      config.url = config.mock.url
    }
    if (config.options) {
      if (config.options.loadingOpen) {
        store.commit('ui/changeLoading', true)
      }
    }
    if (~['delete', 'put', 'patch'].indexOf(config.method)) {
      config.method = 'post'
    }
    let token = Cookies.get('token')
    if (token) {
      config.headers.Authorization = Cookies.get('token')
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)
axios.interceptors.response.use(
  function(response) {
    let intercept = true
    if (response.config.params && response.config.params.intercept === false) {
      intercept = false
    }
    if (response.data && response.data.code !== 200 && intercept) {
      store.commit('ui/changeToast', {
        type: 'content',
        data: response.data.msg
      })
    }
    store.commit('ui/changeLoading', false)
    return response
  },
  function(error) {
    store.commit('ui/changeLoading', false)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('login', false)
          break
        default:
          store.commit('ui/changeToast', {
            type: 'content',
            data: error.response.data.message
          })
          break
      }
    }
    return Promise.reject(error)
  }
)

export default axios
