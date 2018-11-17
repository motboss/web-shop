import Vue from 'vue'
import Router from 'vue-router'

//  懒路由加载
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const category = r => require.ensure([], () => r(require('@/pages/category/category')), 'category')
const search = r => require.ensure([], () => r(require('@/pages/search/search')), 'search')
const productList = r => require.ensure([], () => r(require('@/pages/product-list/product-list')), 'productList')
const productDetail = r => require.ensure([], () => r(require('@/pages/product-detail/product-detail')), 'productDetail')
const user = r => require.ensure([], () => r(require('@/pages/user/user')), 'user')
const profile = r => require.ensure([], () => r(require('@/pages/profile/profile')), 'profile')
const login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const register = r => require.ensure([], () => r(require('@/pages/register/register')), 'register')
const forgetPassword = r => require.ensure([], () => r(require('@/pages/forget-password/forget-password')), 'forget-password')
const shopcart = r => require.ensure([], () => r(require('@/pages/shopcart/shopcart')), 'shopcart')
const order = r => require.ensure([], () => r(require('@/pages/order/order')), 'order')
const payment = r => require.ensure([], () => r(require('@/pages/payment/payment')), 'payment')


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            meta: {
                index: 1
            },
            component: home
        }, {
            path: '/category',
            meta: {
                index: 1
            },
            component: category
        }, {
            path: '/search',
            meta: {
                index: 1
            },
            component: search
        },{
            path: '/product-list',
            meta: {
                index: 3
            },
            component: productList
        },{
            path: '/product/:id',
            meta: {
                index: 4
            },
            component: productDetail
        },{
            path: '/user',
            meta: {
                index: 1
            },
            component: user
        },{
            path: '/profile',
            meta: {
                index: 2
            },
            component: profile
        },{
            path: '/login',
            meta: {
                index: 2
            },
            component: login
        },{
            path: '/register',
            meta: {
                index: 3
            },
            component: register
        },{
            path: '/forget-password',
            meta: {
                index: 3
            },
            component: forgetPassword
        },{
            path: '/shopcart',
            meta: {
                index: 1
            },
            component: shopcart
        },{
            path: '/order',
            meta: {
                index: 2
            },
            component: order
        },{
            path: '/payment',
            meta: {
                index: 3
            },
            component: payment
        }
    ]
})
