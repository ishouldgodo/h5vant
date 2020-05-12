import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    username: "",
    aboutdata: "",

    actionData: "",
  },

  // 同步  第一个形参 代表state
  //   name形参代表的是  你此时传递过来的参数
  mutations: {
    getTopClickMenuName: (state, name) => {
      state.username = name; //赋值
      console.log("this", Vue.actionDataApi);
    },

    getabout: (state, str) => {
      state.aboutdata = str; //赋值
    },

    actioncomAPi: (state, data) => {
      state.actionData = data; //赋值
    },
  },

  //异步
  actions: {
    actionDataApi() {
      return new Promise((resolve, reject) => {
        axios.get("http://127.0.0.1:667/account").then((res) => {
          if (res.status == 200) {
            console.log(res);
            resolve(res);
          } else {
            reject(res);
          }
        });
      });
    },
  },
});
