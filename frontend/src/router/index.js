import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Login from '../views/Login.vue'
import MyOrders from '../views/MyOrders.vue'
import Staff from '../views/Staff.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/login', component: Login },
    { path: '/orders', component: MyOrders },
    { path: '/staff', component: Staff },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile },
  ]
})

export default router
