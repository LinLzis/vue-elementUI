import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/HelloWorld'
import Form from '@/components/index/Form'
import List from '@/components/index/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/br',
      name: 'Form',
      component: Form
    },{
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
