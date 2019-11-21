import qs from 'querystring'
import router from '@/router'
import _which from './which'
import { applyBridge, bridgeMapping } from './bridge'
const mapping = {
  home: ['/Index/index', '/'],
  login: ['/User/loginPage', '/login']
}

export function loadJs(src, cb) {
  const w = window
  const getExist = w.document.querySelector(`script[src='${src}']`)
  let script
  if (getExist) {
    script = getExist
  } else {
    const ref = w.document.getElementsByTagName('script')[0]
    script = w.document.createElement('script')
    script.src = src
    script.async = true
    ref.parentNode.insertBefore(script, ref)
  }
  const loaded = script.getAttribute('loaded')
  if (cb && typeof cb === 'function') {
    if (!loaded) {
      script.onload = function() {
        script.setAttribute('loaded', true)
        cb()
      }
    } else {
      cb()
    }
  }
  return script
}

export function inViewport(element, _window = window) {
  const { top, right, bottom, left } = element.getBoundingClientRect()
  return (
    top < _window.innerHeight &&
    bottom > 0 &&
    (left < _window.innerWidth && right > 0)
  )
}

export function locationTo(url) {
  if (url) {
    if (/Android/gi.test(_which.project.uaParser.os.name)) {
      if (~url.indexOf('?')) {
        url = url + '&titleVisible=false'
      } else {
        url = url + '?titleVisible=false'
      }
    }
    window.location = url
  }
}

export function touchGround(handler, distance = 10) {
  return (
    handler.scrollHeight - handler.scrollTop - handler.offsetHeight <= distance
  )
}

export function locationToLogin(fullPath) {
  if (_which.project.isYi23) {
    window.location = `/yi23/Home/User/loginPage?redirect=${encodeURIComponent(
      fullPath
    )}&back=${encodeURIComponent('architecture' + fullPath)}`
  } else if (_which.project.isAlipayMiniProgram) {
    my.postMessage({'sendToLogin': 1});
  } else {
    router.replace({
      path: '/login',
      query: {
        redirect: fullPath
      }
    })
  }
}

/**
 * @typedef mappingParams
 * @type {object}
 * @property {string} name
 * @property {string} path
 * @property {Object} query - URL query
 * @property {boolean} reverse - 反转 是否获取新项目路由
 */

/**
 * location 跳转
 * @param {mappingParams} config
 * @param {boolean} replace - 是否为 replace 方法
 */
export function navigate(config, replace) {
  const path = getMappingURL(config)
  if (replace) {
    window.location.replace(path)
  } else {
    window.location = path
  }
}

/**
 * location 或 router 跳转
 * @param {mappingParams} config
 * @param {boolean} replace - 是否为 replace 方法
 */
export function jump(config, replace) {
  if (!config.reverse) {
    navigate(config, replace)
  } else {
    delete config.reverse
    if (replace) {
      router.replace(config)
    } else {
      router.push(config)
    }
  }
}

/**
 * 获取新旧版路由字典
 * 传入一个 name 或者 path 返回一个旧版的地址
 * @param {mappingParams} params
 */
export function getMappingURL({ name, path, query, reverse = false }) {
  let val
  if (!name && !path) {
    console.error('请求参数错误')
    return ''
  }
  // 传入不存在的 name
  if (name && !mapping[name]) {
    name = 'home'
  }
  if (path) {
    name = Object.keys(mapping).find(key => {
      return mapping[key].indexOf(path) >= 0
    })
  }
  if (mapping[name]) {
    val = mapping[name][+reverse]
  }
  if (!val) {
    val = path
  }
  let url = val
  if (query) {
    url += '?' + qs.stringify(query)
  }
  return url
}

export function trackSa(fun, res) {
  try {
    sa.track(fun, res)
  } catch (e) {
    console.error(e)
  }
}

export function parseMemberToCode(memberStatus) {
  let status
  switch (memberStatus) {
    case 'C':
      status = 1
      break
    case 'B':
      status = 0
      break
    default:
      status = 2
  }
  return status
}

const EaseIn = function(power) {
  return function(t) {
    return Math.pow(t, power)
  }
}
const EaseOut = function(power) {
  return function(t) {
    return 1 - Math.abs(Math.pow(t - 1, power))
  }
}
const EaseInOut = function(power) {
  return function(t) {
    return t < 0.5
      ? EaseIn(power)(t * 2) / 2
      : EaseOut(power)(t * 2 - 1) / 2 + 0.5
  }
}
export const which = _which
export const easing = {
  linear: EaseInOut(1),
  easeInQuad: EaseIn(2),
  easeOutQuad: EaseOut(2),
  easeInOutQuad: EaseInOut(2),
  easeInCubic: EaseIn(3),
  easeOutCubic: EaseOut(3),
  easeInOutCubic: EaseInOut(3),
  easeInQuart: EaseIn(4),
  easeOutQuart: EaseOut(4),
  easeInOutQuart: EaseInOut(4),
  easeInQuint: EaseIn(5),
  easeOutQuint: EaseOut(5),
  easeInOutQuint: EaseInOut(5)
}

export function animate({
  timing = timeFraction => timeFraction,
  draw,
  duration = 1000
}) {
  let start = performance.now()

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration
    if (timeFraction > 1) timeFraction = 1

    let progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}

function _getTime() {
  if (window.performance && performance.now) {
    return performance.now()
  } else {
    return Date.now()
  }
}

/**
 * 倒计时
 * @param {Number} diff - 毫秒差值
 * @param {countdown~callback} callback
 * @param {countdown~stopCallback} stopCallback
 */
export function countdown(diff, cb, stop_cb) {
  const interval = 1000
  let count = 0
  let timer = null
  let isPause = false
  return {
    run() {
      const startTime = _getTime()
      // 当前定时器运行时间 - 理想状态运行时间
      const offset = _getTime() - (startTime + count * interval)
      const nextTime = interval - (offset < 0 ? 0 : offset)
      count++
      if (diff <= 0) {
        clearTimeout(timer)
        this.stop()
      } else {
        timer = setTimeout(
          () => {
            if (isPause) {
              return
            }
            diff -= interval
            typeof cb === 'function' && cb(diff)
            this.run()
          },
          nextTime < 0 ? 0 : nextTime
        )
      }
    },
    play() {
      if (timer) {
        return
      }
      if (isPause) {
        isPause = false
      }
      if (diff <= 0) {
        this.stop()
      } else {
        this.run()
      }
    },
    stop() {
      typeof stop_cb === 'function' && stop_cb()
      clearTimeout(timer)
      timer = null
    },
    set(val) {
      diff = val
    },
    pause() {
      clearTimeout(timer)
      timer = null
      isPause = true
    },
    continue() {
      if (!isPause) {
        return
      }
      isPause = false
      this.run()
    }
  }
}

export function leftPad(num) {
  var n = parseInt(num, 10)
  return n < 10 ? '0' + n : '' + n
}

export function formatTime(ms) {
  var s = ms / 1000,
    m = s / 60
  return {
    d: leftPad(m / 60 / 24),
    h: leftPad((m / 60) % 24),
    m: leftPad(m % 60),
    s: leftPad(s % 60)
  }
}
/**
 * 判断是否在一个时间段内
 * @param {object} range  - 范围
 * @param {number?} date - 对比的时间
 * @return {number} - -1 小于 0 进行中 1 过期
 */
export function expiryDate(range, date) {
  const _date = date ? date.valueOf() : Date.now()
  let code = 0
  if (_date < range.start.valueOf()) {
    code = -1
  } else if (_date > range.end.valueOf()) {
    code = 1
  }
  return code
}

export function setTitle(title) {
  const project = _which.project
  document.title = title
  if (project.uaParser.os.name === 'iOS' && !project.isYi23) {
    let i = document.createElement('iframe')
    i.style.display = 'none'
    i.src = 'https://yimg.yi23.net/reversion/favicon.ico'
    i.onload = () => {
      setTimeout(() => {
        i.remove()
      }, 0)
    }
    document.body.appendChild(i)
  }
  if (
    project.isFish &&
    (!/windVane=false/.test(window.location.search) &&
      localStorage.getItem('windVane') !== 'false')
  ) {
    loadJs(`https://g.alicdn.com/mtb/lib-windvane/2.1.8/windvane.js`, () => {
      try {
        window.WindVane.call('WVIdleFishApi', 'setTitle', { title })
      } catch (e) {}
    })
  }
  if (project.isYi23) {
    try {
      applyBridge(bridge => {
        bridgeMapping.setTitle(title)(bridge)
      })
    } catch (e) {
      console.error(e)
    }
  }
}

export function imgLoaded(src, callback) {
  const img = new Image()
  img.onload = function() {
    typeof callback === 'function' && callback()
  }
  img.src = src
}

export function compareVersion(current, target) {
  const arr_current = current.split('.')
  const arr_target = target.split('.')
  while (arr_current.length < arr_target.length) {
    arr_current.push('0')
  }
  while (arr_target.length < arr_current.length) {
    arr_target.push('0')
  }
  for (let i = 0; i <= arr_current.length; i++) {
    if (arr_current[i] !== arr_target[i]) {
      return arr_current[i] >= arr_target[i]
    }
  }
  return true
}

export function isAlipayMiniProgram() {
  if (_which.project.isAlipay && window.my) {
    return new Promise(function(resolve, reject) {
      window.my.getEnv(function (res) {
        resolve(res.miniprogram)
      });
    })
  }else{
    return Promise.resolve(false)
  }
}

/** 
 * 链接参数拼接
 * @param {string} url
 * @param {object} param
*/
export function createUrlSearchKey(url,param){
  
  let stringType = Object.prototype.toString.call(param)
  if(stringType !== '[object Object]') return url

  if (~url.indexOf('?')) {
    url += '&'
  } else {
    url += '?'
  }

  let searchKeyString = Object.keys(param).map(function(el){
    el = `${el}=${param[el]}`
    return el
  }).join('&')

  return `${url}${searchKeyString}`
  
}
