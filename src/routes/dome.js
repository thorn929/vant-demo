export default [
  {
    path: '/instruct',
    component: () => import('@/views/dome/instruct')
  },
  {
    path: '/parent',
    component: () => import('@/views/dome/parent')
  },
  {
    path: '/for',
    component: () => import('@/views/dome/for')
  },
  {
    path: '/dome',
    component: () => import('@/views/dome/index')
  },
  {
    path: '/toast',
    component: () => import('@/views/dome/toast')
  },
  {
    path: '/nextTick',
    component: () => import('@/views/dome/nextTick')
  },
  {
    path: '/render',
    component: () => import('@/views/dome/render')
  },
  {
    path: '/unRender',
    component: () => import('@/views/dome/unRender')
  }
]