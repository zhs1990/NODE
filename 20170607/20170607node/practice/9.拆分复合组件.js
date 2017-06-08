import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import "bootstrap/dist/css/bootstrap.css"
import Pagination from "./components/Pagination.js"

//分页组件

//ui组件  木偶组件  傻瓜组件

render(<Pagination pageNum={5} totalPages={5} />,document.querySelector("#root"));