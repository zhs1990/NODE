<template>
    <div id="zhs">
        <h2>这是zhs页面组件</h2>
        <h3>{{title}}</h3>
        <!--直接获取-->
        <!--<h4>直接获取</h4>-->
        <!--<p>{{$store.state.count}}</p>-->
        <!--<p>{{$store.state.say}}</p>-->
        <!--计算属性方式获取-->
        <!--<h4>计算属性方式获取</h4>-->
        <!--<p>{{count}}</p>-->
        <!--<p>{{say}}</p>-->
        <!--mapState-->
        <!--<h4>mapState</h4>-->
        <!--<p>{{count}}</p>-->
        <!--<p>{{say}}</p>-->
        <h3>直接改变state状态:{{$store.state.count}}</h3>
        <button @click="$store.state.count++">改变state状态</button>
        <h3>mutations改变state状态:{{$store.state.count}}</h3>
        <button @click="$store.commit('modState')">改变state状态</button>
        <h3>借助辅助函数mapMutations改变state状态:{{$store.state.count}}</h3>
        <button @click="modState">改变state状态</button>
        <h3>actions改变state状态:{{$store.state.count}}</h3>
        <button @click="$store.dispatch('aMode')">改变state状态</button>
        <h3>借助辅助函数mapActions改变state状态:{{$store.state.count}}</h3>
        <button @click="aMode">改变state状态</button>
        <h3>直接得到getters计算后的值:{{$store.getters.newCount}}</h3>
        <h3>通过辅助函数mapGetters得到getters计算后的值:{{newCount()}}</h3>
    </div>
</template>
<script>
    import {mapState,mapMutations,mapActions,mapGetters} from "vuex" //借助辅助函数
    export default{
        name:"zhs",
        data(){
            return {title:"hello zhs!"}
        },
//        computed:{
//            count(){
//                return this.$store.state.count;
//            },
//            say(){
//                return this.$store.state.say;
//            }
//        }
        computed:{
            ...mapState(["count","say"])//需要配置.babelrc文件  安装babel-preset-stage-0
        },
        methods:{
            ...mapMutations(['modState']),
            ...mapActions(['aMode']),
            ...mapGetters(['newCount'])
        }
    }
</script>
<style>
    h4{
        color:red;
    }
    h3{
        color:green;
    }
</style>