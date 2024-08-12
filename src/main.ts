import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/app.css";
import { createPinia } from "pinia";
import { PortableText } from "@portabletext/vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faInstagram, faLinkedin);

const app = createApp(App);

app.use(createPinia());
app.component("portable-text", PortableText);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
