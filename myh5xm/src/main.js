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

import { RadioGroup, Radio } from "vant";
Vue.use(Radio);
Vue.use(RadioGroup);

import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

import { Search } from "vant";
Vue.use(Search);

import { Icon } from "vant";
Vue.use(Icon);

import { Grid, GridItem } from "vant";
Vue.use(Grid);
Vue.use(GridItem);

import { Image as VanImage } from "vant";
Vue.use(VanImage);

import com from "./components";
Vue.use(com);

import way from "./utils";
Vue.use(way);

import { Overlay } from "vant";
Vue.use(Overlay);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
