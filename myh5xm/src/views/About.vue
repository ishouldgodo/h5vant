<template>
    <div class="about">
        <h1>{{ atoB }}--</h1>
        <div>{{ $store.state.aboutdata }}</div>

        <my-seach></my-seach>
        <!--  -->
        <select-list :listSelectData="listSelectData"></select-list>

        <van-grid :column-num="4">
            <van-grid-item v-for="value in 15" :key="value" icon="photo-o" text="文字" />
        </van-grid>

        <van-grid :column-num="4">
            <van-grid-item
                @click="theHanlder(item,index)"
                class="sub-only-list"
                :class="activeBg=index==currenx"
                v-for="(item,index) in List"
                :key="index"
            >
                <div>1213</div>
            </van-grid-item>

            <van-grid-item>
                <div>
                    <van-icon name="plus" />
                </div>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listSelectData: [
                { radio: "1", url: "https://img.yzcdn.cn/vant/cat.jpeg", name: "王清风" },
                { radio: "2", url: "https://img.yzcdn.cn/vant/cat.jpeg", name: "王清风" },
                { radio: "3", url: "https://img.yzcdn.cn/vant/cat.jpeg", name: "王清风" },
                { radio: "4", url: "https://img.yzcdn.cn/vant/cat.jpeg", name: "王清风" }



            ],
            searchValue: "",

            currenx: -1,
            List: [
                {},
                {},

                {},
                {},

                {},
                {},

                {},
                {},

                {},




            ]

        };
    },
    created() { },

    computed: {
        atoB() {
            return this.$store.state.username;
        },
    },

    methods: {
        theHanlder(item, index) {
            this.currenx = index;
        }
    },
    components: {
        "select-list": () => import("../components/selectList"),
        "my-seach": () => import("../components/mySeach"),




    },


};
</script>
<style lang="scss" scoped>
.sub-only-list {
    height: 71px;
}
</style>
