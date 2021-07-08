import VueRouter from 'vue-router';
import Vue from 'vue';
Vue.use(VueRouter);
import store from '../store/index';

const routes = [
  {
    path: '/',
    component: () => import('../views/Base'),
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        name: 'overview',
        component: () => import('../views/pages/Overview'),
      },
      {
        path: 'bookings',
        name: 'bookings',
        component: () => import('../views/pages/account/Bookings'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'tour/:id',
        name: 'tour',
        component: () => import('../views/pages/Tour'),
        props: true,
      },
      {
        path: 'auth/login',
        name: 'login',
        component: () => import('../views/pages/auth/Login'),
        meta: {
          noAuth: true,
        },
      },
      {
        path: 'auth/signup',
        name: 'signUp',
        component: () => import('../views/pages/auth/SignUp'),
        meta: {
          noAuth: true,
        },
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../views/pages/account/AccountBase'),
        children: [
          {
            path: 'settings',
            name: 'settings',
            component: () => import('../views/pages/account/Settings'),
          },
          {
            path: 'bookings/verify/:ref/:tourId',
            name: 'verify-booking',
            component: () => import('../views/pages/account/VerifyBookings'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // always scroll to top
  },
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (store.state.accessToken === null) {
      return router.push('/auth/login');
    }
  }

  if (to.meta.noAuth) {
    if (store.state.accessToken !== null) {
      return router.push('/home');
    }
  }

  next();
});

export default router;
