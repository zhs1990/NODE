<template>
    <div id="tl">
        <h2>这是tl页面组件</h2>
        <h3>{{title}}</h3>
        <p>{{count}}</p>
        <p>{{zhs}}</p>
    </div>
</template>
<script>
    import {mapState} from "vuex"
    export default{
        name:"tl",
        data(){
            return {title:"hello tl!",count:222}
        },
        computed:{
            //...mapState(["say","count"])
            //如果传入的名称与当前组件中变量重名，可以采用以下方式,对象方式就是避免变量名重复
            ...mapState({zhs:"count"})
        }
    }
</script>