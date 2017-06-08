import React,{Component} from "react"
import {render} from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import $ from "jquery"
import  MessageBox from "./components/MessageBox.js"

//提升状态
//珠峰留言板
render(<MessageBox/>,document.querySelector("#root"));