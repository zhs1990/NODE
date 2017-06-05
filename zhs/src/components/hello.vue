<template>
    <div id="hello">
        <h3 @click="say">hello.vue{{title}}</h3>
        <img src="../assets/logo.png" alt="">

    </div>
</template>
<script>
    export default {
        name:"hello",
        data:function(){
            return {title:"早上好"}
        },
        methods:{
            say:function () {
                alert(111);
            }
        }
    }
</script>
<style>
    h3{
        color:red;
    }
</style>