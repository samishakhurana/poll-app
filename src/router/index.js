import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/pages/LoginPage'
import ThankYouPage from '@/pages/ThankyouPage'
import PollPage from '@/pages/PollPage'

Vue.use(VueRouter)

const routes = [
  { path: `/`, redirect: '/login' },
  { path: `/login`, component: LoginPage },
  { path: `/poll`, component: PollPage },
  { path: `/thankyou`, component: ThankYouPage }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router