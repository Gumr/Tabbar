import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Classify from '@/pages/classify/Classify'
import Cart from '@/pages/cart/Cart'
import My from '@/pages/my/My'
import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My,
      meta: {
        title: '',
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})
