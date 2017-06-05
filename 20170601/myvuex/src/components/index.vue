<template>
    <div id="index">
        <h3>{{title}}</h3>
        <p>{{$store.state.count}}</p>
        直接改变state:<button @click="$store.state.count--">sub</button>
    </div>
</template>
<script>
    export default {
        data:function(){
            return {title:"欢迎来到首页"};
        }
    }
</script>