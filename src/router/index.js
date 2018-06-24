import Vue from 'vue'
import Router from 'vue-router'

import Home1 from '@/components/Home1'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home1',
      component: Home1
    },
    {
      path: '/hackathon/detail',
      name: 'Detail',
      component: Detail
    },

  ]
})
