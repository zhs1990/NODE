import React,{Component} from "react"
import {Redirect,Route} from "react-router-dom"
export default function (props) {
    console.log(props);
    return <button  className="btn btn-primary" onClick={()=>{
        localStorage.setItem("login",'true');
        props.history.push(props.location.state.from);
    }}>登录</button>
}