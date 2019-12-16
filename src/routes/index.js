import dom from './dom'
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
    alias: '/cc',
    component: () => import('@/views/C.vue')
  },
  {
    path: '/c/:id',
    component: () => import('@/views/C.vue')
  },
  ...dom,
  {
    path: "*",
    // component: () => import('@/views/404.vue'),
    redirect: '/'
  }
]
