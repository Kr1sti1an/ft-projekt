import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// Vuetify
//import 'vuetify/styles'
//import { createVuetify } from 'vuetify'
//import * as components from 'vuetify/components'
//import * as directives from 'vuetify/directives'

//const vuetify = createVuetify({
//  components,
//  directives,
//})

app.use(createPinia())
app.use(router)

app.mount('#app')
