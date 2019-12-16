export default [
  {
    path: '/instruct',
    component: () => import('@/views/dom/instruct')
  },
  {
    path: '/parent',
    component: () => import('@/views/dom/parent')
  },
  {
    path: '/for',
    component: () => import('@/views/dom/for')
  },
  {
    path: '/dom',
    component: () => import('@/views/dom/index')
  },
  {
    path: '/toast',
    component: () => import('@/views/dom/toast')
  },
  {
    path: '/nextTick',
    component: () => import('@/views/dom/nextTick')
  }
]