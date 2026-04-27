import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistence from 'pinia-plugin-persistedstate'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistence)
app.use(pinia)
app.use(router)
app.mount('#app')
