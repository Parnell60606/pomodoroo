import { createApp } from 'vue'
import pinia from './plugins/pinia'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import { VitePWA } from "vite-plugin-pwa"


loadFonts()




createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  // .use(VitePWA)
  .mount('#app')
