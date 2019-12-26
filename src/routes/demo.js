export default [
  {
    path: '/demo',
    component: () => import('@/views/demo/index')
  },
  {
    path: '/instruct',
    component: () => import('@/views/demo/instruct')
  },
  {
    path: '/parent',
    component: () => import('@/views/demo/parent')
  },
  {
    path: '/for',
    component: () => import('@/views/demo/for')
  },
  {
    path: '/toast',
    component: () => import('@/views/demo/Toast.vue')
  },
  {
    path: '/nextTick',
    component: () => import('@/views/demo/nextTick')
  },
  {
    path: '/render',
    component: () => import('@/views/demo/render')
  },
  {
    path: '/unRender',
    component: () => import('@/views/demo/unRender')
  },
  {
    path: '/directive',
    component: () => import('@/views/demo/directive')
  },
  {
    path: '/father',
    component: () => import('@/views/demo/provide/father')
  },
  {
    path: '/attr',
    component: () => import('@/views/demo/attrs/parent')
  },
  {
    path: '/vuex',
    component: () => import('@/views/demo/vuex')
  }
]