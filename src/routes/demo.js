export default [
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
    path: '/demo',
    component: () => import('@/views/demo/index')
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
  
  // referer
  {
    path: "/referer",
    redirect: '/b'
  },
  {
    path: "/referer",
    component: () => import('@/views/demo/Referer')
  }
]