export default {
  install(Vue) {
    Vue.prototype.say = function() {
      alert("我是全局方法");
    };
  },
};
