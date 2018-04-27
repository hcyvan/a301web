import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SearchResult from '@/components/SearchResult'
import ProductDetail from '@/components/ProductDetail'
import SellerPage from '@/components/SellerPage'
import Register from '@/components/Account/Register'
import Login from '@/components/Account/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HelloWorld,
      children: [
        {
          path: '',
          component: SearchResult
        },
        {
          path: 'detail',
          component: ProductDetail
        },
        {
          path: 'seller',
          component: SellerPage
        }
      ]
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
