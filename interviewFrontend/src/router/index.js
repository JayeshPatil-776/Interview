import Vue from 'vue'
import VueRouter from 'vue-router'
import parent from '@/components/parent.vue'

Vue.use(VueRouter)

const routes = [{
  name: 'parent',
  component: parent,
  path: '/parent'
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
