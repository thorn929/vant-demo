export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/A.vue')
  },
  {
    path: '/test',
    meta: {
      title: 'test'
    },
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/a',
    component: {
      beforeRouteEnter() {
        window.location.href = '/test'
      }
    }
  },
  {
    path: '/b',
    redirect: () => {
      window.location.href = 'https://www.baidu.com'
    }
  },
  {
    path: '/c/:id',
    component: () => import('@/views/C.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
