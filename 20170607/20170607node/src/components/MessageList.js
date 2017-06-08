import React,{Component} from "react"
import MessageItem from "./MessageItem.js"
export default class MessageList extends Component{
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.list.map((item,index)=><MessageItem item={item} key={index} delMessage={this.props.delMessage} />)
                }
            </ul>
        );
    }
}