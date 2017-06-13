import React from "react"
import ReactDom from "react-dom"

let user = {firstName:"张",lastName:"红爽"};
//JSX = javascript +xml  一种混合写法
function format(user){
    if(user){
        return <h1>{user.firstName+user.lastName}</h1>
    }else{
        return <h1>hello,陌生人</h1>
    }
}
//它是一个React元素，用来描述DOM结构或者UI结构
//let ele = (<h1>{user.firstName + user.lastName}</h1>);
let ele = format(user);
//render是把一个react元素渲染到root容器内部
ReactDom.render(
    ele,
    document.getElementById("root")
);

//elements and todo-components
//React元素  React组件