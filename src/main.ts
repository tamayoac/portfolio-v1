import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/app.css";
import { createPinia } from "pinia";
import { PortableText } from "@portabletext/vue";
import { registerDirectives } from "@/directives/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faGithub,
  faX,
  faArrowLeft
);

const app = createApp(App);

registerDirectives(app);

app.use(createPinia());
app.use(router);
app.component("portable-text", PortableText);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
