import React,{Component} from "react"
import MessageList from "./MessageList"
import PropTypes from "prop-types";
class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state = {messages:["a","b","c"]};
    }
    //用于定义/返回子组件上下文对象
    getChildContext(){
        return {
            removeMes:this.removeMes
        }
    }
    removeMes = (index)=>{
        this.state.messages.splice(index,1);
        this.setState({
            messages:this.state.messages
        });
    }
    render(){
        return (
            <div>
                <MessageList messages={this.state.messages}  />
            </div>
        );
    }
}
//规定当前组件的子组件的上下文对象属性的名称和类型
MessageBox.childContextTypes = {
    removeMes:PropTypes.func  //react 15版本以前可以用  React.PropTypes.object
};
export default MessageBox