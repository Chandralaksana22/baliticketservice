import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import TicketView from '@/views/TicketView.vue'
import DetailTicket from '@/views/DetailTicketView.vue'
import BaliZooView from '@/views/BaliZooView.vue'
import BaliBirdPark from '@/views/BaliBirdParkView.vue'
import BaliFarmView from '@/views/BaliFarmView.vue'
import BaliSafariView from '@/views/BaliSafariView.vue'
import PlaceToGoView from '@/views/PlaceTioGoView.vue'
import DetailPlaceToGo from '@/views/DetailPlaceToGoView.vue'
import ConfirmationPageView from '@/views/ConfirmationPageView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

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
      path: '/bali-safari',
      name: 'bali safari',
      component: BaliSafariView
    },
    {
      path: '/bali-farm',
      name: 'bali farm',
      component: BaliFarmView
    },
    {
      path: '/bali-bird-park',
      name: 'bali bird park',
      component: BaliBirdPark
    },
    {
      path: '/place-to-go',
      name: 'place to go',
      component: PlaceToGoView
    },
    {
      path: '/detail-place-to-go',
      name: 'detail place to go',
      component: DetailPlaceToGo
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: TicketView
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: ConfirmationPageView
    },
    {
      path: '/ticket-detail',
      name: 'ticket detail',
      component: DetailTicket
    },
    {
      path: "/:notFound",
      component: NotFoundView,
    },
  ]
})

export default router
