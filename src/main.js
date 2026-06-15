import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";


import './assets/main.css'

AOS.init({
  once: true,
  offset: 60,
  easing: 'ease-out-cubic',
});
const app = createApp(App)

app.use(router)

app.mount('#app')
