<template>
    <div id="hello">
        <h1>{{title}}</h1>
        <h2>mapState:{{count}}</h2>
        <h3>mapGetters:{{countGetter}}</h3>
        <button @click="modState(10)">mapMutations</button>
        <button @click="aMode">mapActions</button>
    </div>
</template>
<script>
    /*
    * mapState      获取state里面的状态
    * mapMutations  同步修改state状态 commit  mutations
    * mapActions    可以异步修改state状态  dispatch - commit
    * mapGetters    计算出来新的数据属性
    * */
    import {mapState,mapGetters,mapMutations,mapActions} from "vuex"
    export default{
        name:"hello",
        data(){
            return {title:"hello hello!"}
        },
        computed:{
            ...mapGetters(["countGetter"]),
            ...mapState(["count"])
        },
        methods:{
            ...mapMutations(["modState"]),
            ...mapActions(['aMode'])
        }
    }
</script>