import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: (resolve) => require(['../App'],resolve),
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: (resolve) => require(['../view/home'],resolve)
    }
  ]
})
