import './assets/style.css'
import 'aos/dist/aos.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import piniaPluginPersist from 'pinia-plugin-persist'       //import pluginu ktory zabezpečuje ukladanie dat na perzist. uložisko
import App from './App.vue'
import router from './router'
import AOS from 'aos'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersist)
app.use(pinia)
app.use(router)

app.mount('#app')
