import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
