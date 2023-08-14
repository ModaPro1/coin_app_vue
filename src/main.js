import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import MainPage from './pages/MainPage.vue'
import CoinPage from './pages/CoinPage.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/:coinId',
      component: CoinPage
    }
  ]
})

app.use(router)

app.mount('#app')
