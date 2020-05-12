<template>
    <div>
        <div class="disflex-bttom">
            <div class="left-btn-name">{{ leftName }}</div>
            <div class="right-btn-name">{{ rightName }}</div>
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
        leftName: {
            type: String,

        },
        rightName: {
            type: String,
        }
    }
}
</script>

<style lang="scss" scoped>
.disflex-bttom {
    display: flex;
    height: 50px;
    // position: fixed;

    .left-btn-name {
        flex: 1;
        background: #ebf3ff;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .right-btn-name {
        flex: 3;
        height: 50px;
        line-height: 50px;
        background: #3b8bff;
        text-align: center;
    }
}
</style>