import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/home.vue'
import ApplyView from '../pages/apply.vue'
import DownloadView from '../pages/download.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    hidden: true
  },
  {
    path: '/apply',
    name: 'Apply',
    component: ApplyView,
    hidden: true
  },
  {
    path: '/download',
    name: 'Download',
    component: DownloadView,
    hidden: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
// import { createRouter, createWebHistory } from 'vue-router'

// // 导入组件
// import HomeView from '../pages/home.vue'
// import ApplyView from '../pages/apply.vue'
// import DownloadView from '../pages/download.vue'

// export const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomeView,
//       hidden: true
//   },
//   {
//     path: '/apply',
//     name: 'Apply',
//     component: ApplyView,
//       hidden: true
//   },
//   {
//     path: '/download',
//     name: 'Download',
//     component: DownloadView,
//       hidden: true
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })

// export default router