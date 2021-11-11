import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//import Registro from '../views/auth/Registro.vue'
//import DetalleSala from '../views/DetalleSala.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registroroom',
    name: 'RegistroRoom',
    component: () => import('../views/RegisterRoom.vue')
  },
  {
    path: '/registrouser',
    name: 'RegistroUser',
    component: () => import('../views/auth/RegistroUser.vue')
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import('../views/Rooms.vue')
  },
  /*{
    path: '/detallesala',
    name: 'DetalleSala',
    component: DetalleSala
  }*/
]

const router = new VueRouter({
  routes
})

export default router



/*import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ //'../views/About.vue')
 /* }
]

const router = new VueRouter({
  routes
})

export default router*/
