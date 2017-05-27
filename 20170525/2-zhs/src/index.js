//node导入
// var a = require("./public/a.js");
// console.log(a.abc);
// a.add(10,20);
//ES6导入
// import {say as zhs} from "./public/b.js";
// import Hello from "./public/b.js";
//
// zhs("哈哈");
// Hello.say("你好");

//ES6写法导入
import Vue from "vue"; //第三方模块和内置模块不需要添加路径
import Add from "./public/es6.js";
import Zhs from "./components/zhs.vue";
console.log(Add);
Add(20,30);

new Vue({
    el:"#box",
    data:{
        title:"你好，张红爽！"
    },
    rander:h =>h(Zhs)
    //运行中的Vue框架，没有模板编译功能，此时应该采用rander函数的方式进行传递数据
    //npm安装的vue，默认是运行时的vue框架
    //es6写法： render:h=>h("h4",this.title);
    // rander:function(h) {
    //     return h("h4", this.title); //动态创建h4标签，第二个参数是传递的数据
    // }
});
