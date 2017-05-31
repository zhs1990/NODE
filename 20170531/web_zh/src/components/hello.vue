<template>
    <div id="hello">
        <h2>我是外部less文件</h2>
        <h3 @click="say">{{title}}</h3>
        <h4 @click="say">{{title}}</h4>
        <img src="../assets/logo.png">
        <button class="btn btn-danger">危险</button>
    </div>
</template>
<script>
export default {
    name:"hello",
    data:function () {
        return {title:"hello sir"};
    },
    methods:{
        say:function(){
            alert(this.title);
        }
    }
}
</script>
<style lang="less" scoped> /*scoped 限定样式为局部样式*/
#hello{
    h3{
        color:green;
    }
    h4{
        color:blue;
    }
}

</style>