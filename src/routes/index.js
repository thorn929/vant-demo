export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/A.vue')
  },
  {
    path: 'test',
    meta: {
      title: 'test'
    },
    component: () => import('@/views/Test.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
