import React,{Component} from "react"
export default class TodoFilter extends Component{
    render(){
        return (
            <div>
                <button>全部</button>
                <button>未完成</button>
                <button>已完成</button>
            </div>
        );
    }
}