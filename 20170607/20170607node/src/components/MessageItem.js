import React,{Component} from "react"
export default class MessageItem extends Component{
    del = ()=>{
        this.props.delMessage(this.props.item.id)
    }
    render(){
        return (
            <li className="list-group-item" key={this.props.index}>{this.props.item.username}:{this.props.item.content} <span className="pull-right">{this.props.item.createAt.toLocaleString()}</span> <button onClick={this.del} type="button" className="btn btn-danger btn-xs">删除</button></li>
        );
    }
}