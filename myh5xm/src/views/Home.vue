<template>
    <div class="home">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>

        <van-button type="warning" @click="add">++</van-button>
        <van-button type="danger">{{ $store.state.username }}</van-button>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            active: 0,
        };
    },

    created() {
        this.homeAPi();
        this.tongbuPAi();

        this.test();


        this.MyCHufa();


    },

    methods: {
        test() {
            let arr1 = ['kk', 'jo', 'll'];
            if (arr1.includes("kk")) {//【ɪnˈkluːz】
                console.log("找到了", arr1.includes("kk"));
            } else {
                console.log("没有", arr1.includes("kk"));
            }


            let arr2 = ['kk', 'jo', 'll'];
            if (arr2.includes("kk", 1)) {//第二个参数，表示从数组中下标为1包含1处开始找
                console.log("找到了", arr2.includes("kk"));
            } else {
                console.log("没有", arr2.includes("kk"));
            }


        },
        homeAPi() {
            // this.$https.get("http://127.0.0.1:667/account").then((res) => {
            //     this.$store.commit("getabout", res);
            // });
        },

        tongbuPAi() {
            this.$store.commit("getTopClickMenuName", 123);
            console.log(this.$router);
        },

        add() {
            this.$store.commit("getTopClickMenuName", this.$store.state.username + 1);
        },

        MyCHufa() {
            let a = this.$store.dispatch('actionDataApi');//触发action中的方法
            console.log(a);

        }
    },
};
</script>
