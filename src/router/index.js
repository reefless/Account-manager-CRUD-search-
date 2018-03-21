import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import add from '@/components/add'
import edit from '@/components/edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/add',
        name: 'add',
        component: add
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: edit,
      props: true,
    },
  ]
})
