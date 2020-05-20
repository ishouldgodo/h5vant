<template>
    <div class="page">
        <div v-if="showflag" class="mask">
            <div class="cont-div">
                <van-icon @click="closeHandler" class="close-icon" name="close" />阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
                阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰 阿法发顺丰
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: {
        showflag: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        closeHandler() {
            this.$emit('close')
        }
    },
}
</script>

<style lang="scss" scoped>
.mask {
    background: rgba(0, 0, 0, 0.4);
    // 水平居中  垂直居中
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    position: absolute;

    //让这个框中水平和垂直方向上居中
    display: flex;
    align-items: center;

    .cont-div {
        width: 311px;
        height: auto;
        background: #ffffff;
        border-radius: 4px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
}

// 控制按钮的方向
.close-icon {
    color: #fff;
    font-size: 20px;
    position: absolute;
    right: -10px;
    top: -48px;
    padding: 10px;
}
</style>