import UAParser from 'ua-parser-js'
let whichProject = (() => {
  const UA = (window.navigator && navigator.userAgent) || ''
  const parser = new UAParser()
  const result = parser.getResult()
  return {
    isWechat: /micromessenger/gi.test(UA),
    isWechatMiniProgram: /miniprogram/gi.test(UA),
    isAlipay: /alipayclient/gi.test(UA),
    uaParser: result,
    isAlipayMiniProgram: /alipayclient/gi.test(UA) && ( /miniprogram/gi.test(UA) || /alipayide/gi.test(UA) ),
    isiphoneX: window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && screen.height == 812 && screen.width == 375
  }
})()
let whichDomain = (() => {
  const _project = whichProject
  let domain = '95vintage.com'
  if (_project.isFish) {
    domain = 'xy.' + domain
  }
  if (
    process.env.VUE_APP_TAG === 'staging' ||
    process.env.VUE_APP_TAG === 'develop'
  ) {
    if (!_project.isFish) {
      domain = 'wx.' + domain
    }
    domain = 'test' + domain
  }
  return domain
})()
let whichCookiePrefix = (() => {
  let env_prefix = 't'
  let project_prefix = ''
  if (
    process.env.VUE_APP_TAG === 'production' ||
    localStorage.getItem('env') === 'production'
  ) {
    env_prefix = 'w'
  }
  if (whichProject.isFish) {
    project_prefix = 'xy'
  }
  return `${env_prefix}${project_prefix}_`
})()
export default {
  project: whichProject,
  domain: whichDomain,
  cookiePrefix: whichCookiePrefix,
  cookieAuthorization: `${whichCookiePrefix}authorization`
}
