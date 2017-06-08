import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"

let names = ["大毛","二毛","三毛"];
//很多时候需要一个字符串数组或者对象数组映射成一个虚拟DOM元素数组
//Each child in an array or iterator should have a unique "key" prop.
//key是唯一的，不能重复
render(<div>
    {
        names.map((name,index)=><span key={index}>{name}</span>)
    }
</div>,document.querySelector("#root"));