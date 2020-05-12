<template>
    <div id="app">
        <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
        </div>-->
        <router-view />

        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/about">动态</van-tabbar-item>
            <van-tabbar-item icon="friends-o" replace to="/scholl">小宣</van-tabbar-item>
            <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            active: 1,
        };
    },

    created() {
        //在页面刷新时将vuex里的信息保存到sessionStorage里
        window.addEventListener("beforeunload", () => {
            sessionStorage.setItem("username", JSON.stringify(this.$store.state));
        });

        //在页面加载时读取sessionStorage里的状态信息
        if (sessionStorage.getItem("username")) {
            this.$store.replaceState(
                Object.assign(
                    {},
                    this.$store.state,
                    JSON.parse(sessionStorage.getItem("username"))
                )
            );
        }
    },
};
</script>
<style lang="scss"></style>
