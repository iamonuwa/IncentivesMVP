require("dotenv").config();

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import Provider from "./graphql";
import Notifications from "vue-notification";
Vue.use(Notifications);

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App),
  provide: Provider.provide()
}).$mount("#app");
