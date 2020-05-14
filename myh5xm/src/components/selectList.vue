<template>
    <div>
        <div class="flex-div" v-for="(item,index) in listSelectData" :key="index">
            <van-checkbox-group class="checked-box" v-model="result">
                <van-checkbox @click="toggle(item,index)" :name="item.radio"></van-checkbox>
            </van-checkbox-group>

            <img class="limit-img-size" :src="item.url" />

            <div class="teacher-name">{{item.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            result: []
        }
    },
    props: {
        listSelectData: {
            type: Array
        }

    },

    methods: {
        toggle(item, index) {
            console.log(item, index, this.result);
            this.$emit("selectHandler", [item, index])
        }
    },

}
</script>

<style lang="scss" scoped>
.flex-div {
    display: flex;
    align-items: center;
    height: 57px;
    justify-content: flex-start;
    padding-left: 15px;
}

.limit-img-size {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-size: 100%;
    margin-left: 14px;
    margin-right: 13px;
}
.teacher-name {
    border-bottom: 1px solid #ccc;
    height: 57px;
    line-height: 57px;
    width: calc(100% - 51px);
    overflow: hidden;
}
</style>