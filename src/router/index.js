import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'login',
        component: login,
    },
    {
        path: '/signup',
        name: 'login',
        component: signup,
    },
    {
        path: '/player',
        name: 'Player',
        // route level code-splitting
        // this generates a separate chunk (player.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "player" */ '../views/Player.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router