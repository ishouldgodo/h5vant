<template>
    <div>
        <div></div>
        <mask-tip-authon></mask-tip-authon>

        <van-button type="primary" @click="openMask">主要按钮</van-button>

        <van-dialog :beforeClose="beforeClose" v-model="show" title="授权密码" show-cancel-button>
            <van-field class="passWord-input-demo" v-model="passWordAuthon" placeholder="请输入授权密码" />
        </van-dialog>

        <list-pic></list-pic>
    </div>
</template>

<script>
export default {
    name: "Scholl",
    data() {
        return {
            show: false,
            passWordAuthon: "",
        }
    },
    components: {
        "mask-tip-authon": () => import("../components/maskTipAuthon"),
        "list-pic": () => import("../components/listPic"),

    },

    methods: {
        openMask() {
            this.show = true;//打开按钮
        },
        //参考网址https://www.bbsmax.com/A/GBJrNKnKJ0/
        beforeClose(action, done) {
            if (action == "confirm") {
                console.log("点击了确定");
                done() //关闭
            } else {
                console.log("取消");
                done() //关闭弹框
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.passWord-input-demo {
    width: 260px;
    height: 50px;
    border: 1px solid #e4e4e4;
    border-radius: 6px;
    margin: 20px auto 10px;
}
</style>