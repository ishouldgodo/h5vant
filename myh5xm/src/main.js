import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 按需加载
import { Button } from "vant";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);

import axios from "axios";
Vue.prototype.$https = axios;
Vue.prototype.$store = store;

import { Dialog } from "vant";
Vue.use(Dialog);

import { Field } from "vant";
Vue.use(Field);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
