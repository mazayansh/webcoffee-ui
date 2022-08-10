import { createRouter, createWebHistory } from 'vue-router'
import { authCheck, guestCheck } from "@/middlewares/auth.js"
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Shop"
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
      meta: {
        title: "Cart"
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: {
        title: "Infomation"
      }
    },
    // {
    //   path: '/forgot-password',
    //   name: 'forgot-password',
    //   component: () => import('../views/Auth/ForgotPasswordView.vue'),
    //   meta: {
    //       title: "Forgot Password"
    //   }
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/LoginView.vue'),
      meta: {
        guestOnly: true,
        title: "Login"
      }
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/OrderHistoryView.vue'),
      meta: {
        requiresAuth: true,
        title: "My Order History"
      }
    },
    {
      path: '/orders/:id',
      name: 'order-detail',
      props: true,
      component: () => import('../views/OrderDetailView.vue'),
      meta: {
        requiresAuth: true,
        title: "Order Detail"
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue'),
      meta: {
        title: "Payment"
      }
    },
    {
      path: '/payment-instruction/:orderId?',
      name: 'payment-instruction',
      props: true,
      component: () => import('../views/PaymentInstructionView.vue'),
      meta: {
        title: "Payment Instruction"
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('../views/ProductView.vue'),
      meta: {
        title: "Our Product"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/RegisterView.vue'),
      meta: {
        guestOnly: true,
        title: "Register"
      }
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingView.vue'),
      meta: {
        title: "Shipping"
      }
    },
    {
      path: "/forbidden",
      name: "forbidden",
      component: () => import(/* webpackChunkName "forbidden" */ '../views/Errors/Forbidden.vue'),
      meta: {
        title: "Forbidden"
      }
    },
    {
        path: "/:catchAll(.*)",
        name: "not-found",
        component: () => import(/* webpackChunkName "notfound" */ '../views/Errors/NotFound.vue'),
        meta: {
          title: "Not Found"
        }
    },
    {
        path: "/404/",
        name: "404resource",
        component: () => import(/* webpackChunkName "notfoundresource" */ '../views/Errors/NotFound.vue'),
        meta: {
          title: "404 Not Found"
        }
    },
    {
        path: "/general-error",
        name: "general-error",
        component: () => import(/* webpackChunkName "networkerror" */ '../views/Errors/GeneralError.vue'),
        meta: {
          title: "Network/Server Failure"
        }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach((toRoute, fromRoute, next) => {
    if(toRoute.matched.some(record => record.meta.requiresAuth)) {
        authCheck(next)
    } else if(toRoute.matched.some(record => record.meta.guestOnly)) {
        guestCheck(next)
    } else {
        next()
    }
})

router.afterEach((toRoute, fromRoute) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'KopiSlur.id'
})

export default router
