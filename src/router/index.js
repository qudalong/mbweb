import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Pulldown',
      component: ()=>import('@/views/betters/Pulldown.vue')
    }
  ]
})
