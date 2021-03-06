import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AsyncComputed from "vue-async-computed";

Vue.config.productionTip = false;
Vue.use(AsyncComputed);

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount("#app");
