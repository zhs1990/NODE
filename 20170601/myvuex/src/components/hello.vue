<template>
    <div id="hello">
        <h3>{{title}}</h3>
        <p>{{count}}</p>
        <p>state:{{$store.state.count}}</p>
        <p>getters:{{$store.getters.newCount}}</p>
        <h1>修改state状态的几种方式</h1>
        直接改变state状态:<button @click="$store.state.count++">add</button>
        <br>
        通过mutations改变状态：<button @click="add">mutations</button>
        <br>
        通过actions改变状态：<button @click="$store.dispatch('modState')">actions</button>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {title:"欢迎来到hello页"};
        },
        computed:{
            count(){
                return this.$store.state.count;
            }
        },
        methods:{
            add(){
                this.$store.commit("addFn");//将状态提交到mutations，触发mutations中定义addFn事件
                //commit(事件触发，传递参数数值或者对象)
//                this.$store.commit({
//                    type:"addFn",
//                    count:20
//                });
            }
        }
    }
</script>