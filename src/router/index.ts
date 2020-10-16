import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import TeamPage from '@/views/TeamPage.vue'
import GamePage from '@/views/GamePage.vue'

function castRouteParam (route: { params: { id: any } }) {
  return {
    id: Number(route.params.id)
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/teams/:school',
    name: 'Team',
    component: TeamPage,
    props: true
  },
  {
    path: '/games/:id',
    name: 'Game',
    component: GamePage,
    props: castRouteParam
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
