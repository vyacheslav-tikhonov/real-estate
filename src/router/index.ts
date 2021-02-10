import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Flats from '@/views/Flats/Flats.vue'
import Layout from '@/components/ui/Layout/Layout.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'Flats',
        component: Flats,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
