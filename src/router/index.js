import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


function guardMyroute(to, from, next) {
  var isAuthenticated = false;
  if (localStorage.getItem('userSession'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  }
  else {
    next('/login'); // go to '/login';
  }
}
const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: "/:catchAll(.*)",
    component: Login,
  },
  {
    path: '/movies',
    name: 'Movies',
    beforeEnter: guardMyroute,
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/movies/:imdbID',
    name: 'MovieDetails',
    beforeEnter: guardMyroute,
    component: () => import('../views/MovieDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
