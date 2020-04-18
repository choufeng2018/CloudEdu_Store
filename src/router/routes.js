
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/addStore.vue') },
      { path: 'createCourse', component: () => import('pages/course/createCourse.vue') },
      { path: 'courseList', component: () => import('pages/course/courseList.vue') },
      { path: 'map', component: () => import('pages/course/mappoint.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
