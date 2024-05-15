import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flowbite-datepicker';
import 'flowbite/dist/datepicker.turbo.js';

const app = createApp(App)

app.use(router)

app.mount('#app')
