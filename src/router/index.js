import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import TicketView from '../views/TicketView.vue'
import DetailTicket from '../views/DetailTicketView.vue'
import BaliZooView from '../views/BaliZooView.vue'
import BaliBirdPark from '../views/BaliBirdParkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/bali-zoo',
      name: 'bali zoo',
      component: BaliZooView
    },
    {
      path: '/bali-bird-park',
      name: 'bali bird park',
      component: BaliBirdPark
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView
    },
    {
      path: '/ticket-detail',
      name: 'ticket detail',
      component: DetailTicket
    },
  ]
})

export default router
