module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': ['warn', {
      allow: ['error', 'warn']
    }],
    'no-undef': 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    Swiper: true,
    Hammer: true,
    sa: true,
    analyticsWorker: true,
    ysf: true
  }
}
