import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import store from './store/store';


const app = createApp(App);
app.use(store);
app.mount('#app');

