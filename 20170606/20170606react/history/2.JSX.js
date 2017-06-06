import React from "react"
import ReactDom from "react-dom"
let id = "id1";

//React元素  - 虚拟DOM元素
//是以<DOM标签开头的
//虚拟DOM元素属性不能随便写
//要转化驼峰命名法： class - className
let style = {backgroundColor:'green'};
let msg = `
    <script>while(true)alert('1');</script>
`;
let ele = (
    <h1 className="zhs" style={style}>
        hello
    </h1>
);
console.log(ele);//{type:"h1",props:{children:"hello",className:"zhs",style:{backgroundColor:'green'}}}
ReactDom.render(
    ele,
    document.getElementById("root")
);