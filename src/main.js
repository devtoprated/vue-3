import { createApp } from 'vue'
import './style.css'
import router from './router';
import store from './store';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App)
.use(router)
.use(store)
.mount('#app')
