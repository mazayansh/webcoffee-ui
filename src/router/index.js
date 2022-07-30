import { createRouter, createWebHistory } from 'vue-router'
// import { authCheck, guestCheck } from "../middleware/auth.js"
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: () => import('../views/Auth/ForgotPasswordView.vue')
    },
    // {
    //   path: "/forbidden",
    //   name: "Forbidden",
    //   component: () => import(/* webpackChunkName "forbidden" */ '../pages/errors/Forbidden.vue'),
    //   meta: {
    //       title: "Forbidden"
    //   }
    // },
    // {
    //     path: "/:catchAll(.*)",
    //     name: "NotFound",
    //     component: () => import(/* webpackChunkName "notfound" */ '../pages/errors/NotFound.vue'),
    //     meta: {
    //         title: "Not Found"
    //     }
    // },
    // {
    //     path: "/404/",
    //     name: "404Resource",
    //     component: () => import(/* webpackChunkName "notfoundresource" */ '../pages/errors/NotFound.vue'),
    //     meta: {
    //         title: "404 Not Found"
    //     }
    // },
    // {
    //     path: "/network-error",
    //     name: "NetworkError",
    //     component: () => import(/* webpackChunkName "networkerror" */ '../pages/errors/NetworkError.vue'),
    //     meta: {
    //         title: "Network Failure"
    //     }
    // }
  ]
})

// router.beforeEach((toRoute, fromRoute, next) => {
//     if(toRoute.matched.some(record => record.meta.requiresAuth)) {
//         authCheck(next, toRoute.meta.roles)
//     } else if(toRoute.matched.some(record => record.meta.guestOnly)) {
//         guestCheck(next)
//     } else {
//         next()
//     }
// })

// router.afterEach((toRoute, fromRoute) => {
//   window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Dashboard'
// })

export default router
