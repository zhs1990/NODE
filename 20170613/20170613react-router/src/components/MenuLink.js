/*
*   component 对应一个组件，当url路径与当前的Route path匹配时渲染
*   render 对一个匿名的组件函数，也是当url路径与当前的Route path匹配时渲染
*   children 不管当前路径是否匹配上，都会渲染对应的组件
* */
import React,{Component} from "react"
import {Route,Link} from "react-router-dom"
export default function ({to,label}) {
    return (<Route path={to} children={({match})=>{
        return <li className={match?"active":""}><Link to={to}>{label}</Link></li>
    }}  />)
}