import Vue from "vue"
import Hello from "./components/hello"
import "./public/index"
import "./public/hello"  //导入外部less
//import "bootstrap"  //导入bootstrap ui组件
import $ from 'jquery'

let add = (a,b) => console.log(a+b);
add(10,20);

$(".main").click(function(){
   alert("我是第一个依赖index的按钮");
});

new Vue({
    el:"#box",
    data:{
        title:"hello vue"
    },
    components:{
        Hello
    }
});