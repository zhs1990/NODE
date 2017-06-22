import React,{Component} from "react"
import Message from "./Message"
export default class MessageList extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.messages.map((message,index)=>(
                        <Message message={message} key={index} index={index} />
                    ))
                }
            </ul>
        );
    }
}