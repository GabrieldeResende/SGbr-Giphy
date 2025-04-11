const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: '/favorites', name: 'favorites', component: () => import('pages/FavoritesPage.vue') },
      { path: '/categorias', name: 'categorias', component: () => import('pages/CategoryPage.vue') },
      { path: '/sobre', name: 'sobre', component: () => import('pages/AboutPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
