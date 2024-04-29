import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";

import Layout from "./Layout.vue";
import "./style.css";
import customContainerPlugin from "../CustomContainerPlugin/customContainer.js";

library.add(fas);

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app }) {
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.use(customContainerPlugin.quick_global_register_plugin());
  },
};
