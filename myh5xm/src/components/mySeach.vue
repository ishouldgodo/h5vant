<template>
    <div class="input-search">
        <input class="input-cont" v-model="searchValue" type="text" placeholder="请输入教师名" />
        <van-icon class="iconSearch" name="chat-o" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue: "",
        }
    }
}
</script>

<style lang="scss" scoped>
.input-search {
    height: 50px;
    width: 100%;
    position: relative;
    .input-cont {
        height: 50px;
        width: 100%;
        border: none;
        padding: 0;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        text-indent: 30px;
    }
    .iconSearch {
        position: absolute;
        left: 10px;
        top: 18px;
    }
}
</style>