<template>
    <div>
        <div>
            <div class="top-name-ing">
                <h4>进行中</h4>
            </div>
            <div>欢迎杨力市长来校参观</div>

            <img class="ing-limit" src="../assets/demo.jpg" />

            <div class="demo-flex">
                <a>05-09 09:00 至 05-10 19:00</a>
                <a>发布班牌5</a>
            </div>

            <bottom-btn leftName="确定" rightName="重置" class="btton-btn-div"></bottom-btn>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    components: {
        "bottom-btn": () => import("../components/bottomBtn")
    }
}
</script>

<style lang="scss" scoped>
.top-name-ing {
    text-align: right;
    height: 20px;
}
.ing-limit {
    width: 100%;
    height: 207px;
}

.btton-btn-div {
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>