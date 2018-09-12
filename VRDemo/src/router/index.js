import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import doctorBf from '@/pages/doctor/doctorBf'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    /*{
      path: '/index',
      name: 'Index',
      component: Index
    },*/
    {
      path: '/index/',
      component: Index,
      children: [
        {
          path: 'doctorbf',
          component: doctorBf
        }
      ]
    }
  ]
})
