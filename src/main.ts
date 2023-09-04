import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronUp, faPlus } from "@fortawesome/free-solid-svg-icons";

library.add(faPlus);
library.add(faChevronUp);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app');
