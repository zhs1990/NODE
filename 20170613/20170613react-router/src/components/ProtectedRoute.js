//当通过函数来定义组件的时候，参数是属性对象props
//函数声明简单，不支持状态，类声明方式支持状态
//当一个组件不需要状态的时候，可以用函数来声明，反之，用类来声明组件
//props = {path:"/profile",component:Profile}
import React,{Component} from "react"
import {Redirect,Route} from "react-router-dom"
export default function({component:Component,...rest}){
    return <Route {...rest} render={(props)=>
        localStorage.getItem("login")?<Component />:<Redirect to={{
            pathname:'/login',
            state:{from:props.location.pathname}
        }} />
    } />
}