import { createApp } from 'vue'
import router from './router';
import { cepsaAuthConfig } from './authConfig';
import { cepsaAuthPlugin } from '@cepsa/cepsa-auth'
import App from './App.vue'

const app = createApp(App)

app.use(router)

app.use(cepsaAuthPlugin, cepsaAuthConfig)

app.mount('#app')
