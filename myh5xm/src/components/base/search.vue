<template>
    <div class="test">
        <h1>我是一个组件</h1>
        <div>我这个组件可以全局使用的</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.test {
    background: pink;
    padding: 10px;
    text-align: center;
}
</style>