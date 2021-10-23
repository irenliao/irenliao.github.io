import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import "./scss/reset.scss";
import "./scss/align.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
