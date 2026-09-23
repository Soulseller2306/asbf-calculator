import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AsbfView from '../views/AsbfView.vue'
import AboutAsbfView from '../views/AboutAsbf.vue'
import CombineLoanView from '../views/CombineLoanView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/asbf', name: 'ASBF', component: AsbfView },
  { path: '/about-asbf', name: 'AboutASBF', component: AboutAsbfView },
  { path: '/jom-combine', name: 'Combine Loan!', component: CombineLoanView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
