<template>
    <div id="zhs">
        <h3 @click="say" :style="colorStyle">{{title}}</h3>
    </div>
</template>

<script>
    export default{
        data(){
            return {title:"你好，未来",colorStyle:{color:'yellow',fontSize:"40px"}};
        },
        methods:{
            say:function(){
                alert(this.title);
            }
        }
    }
</script>
<style>

</style>