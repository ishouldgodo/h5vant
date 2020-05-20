<template>
    <div>
        <div></div>
        <mask-tip-authon></mask-tip-authon>

        <van-button type="primary" @click="openMask">主要按钮</van-button>

        <van-dialog :beforeClose="beforeClose" v-model="show" title="授权密码" show-cancel-button>
            <van-field class="passWord-input-demo" v-model="passWordAuthon" placeholder="请输入授权密码" />
        </van-dialog>

        <list-pic></list-pic>

        <!-- 文字弹出层 -->
        <van-button type="primary" @click="openDecMask">文字弹出层</van-button>

        <dec-mask :showflag="showflag" @close="hnadlerClose"></dec-mask>
    </div>
</template>

<script>
export default {
    name: "Scholl",
    data() {
        return {
            show: false,
            passWordAuthon: "",
            maskFlag: false,
            showflag: false,
        }
    },
    components: {
        "mask-tip-authon": () => import("../components/maskTipAuthon"),
        "list-pic": () => import("../components/listPic"),
        'dec-mask': () => import('../components/dec-Mask')

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
        },

        openDecMask() {
            this.showflag = true;

        },
        hnadlerClose() {
            this.showflag = false;
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