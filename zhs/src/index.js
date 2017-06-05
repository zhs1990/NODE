import Vue from "vue"
import Hello from "./components/hello.vue"
import "./public/index.css"
import $ from "jquery"

$(".index1").click(function(){
    alert("main1");
});
let add = (a,b) => console.log(a+b);

add(30,40);

new Vue({
    el:"#box",
    data:{
        title:"hello world"
    },
    methods:{
        say:function(){
            alert(this.title);
        }
    },
    components:{
        Hello
    }
});