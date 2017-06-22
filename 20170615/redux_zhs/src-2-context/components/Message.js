import React,{Component} from "react"
import Proptypes from "prop-types"
class Message extends Component{
    render(){
        return (
            <li>{this.props.message} <button onClick={()=>this.context.removeMes(this.props.index)}>-</button></li>
        );
    }
}
//规定当前组件从祖先组件传递过来的上下文对象属性的名称和类型
Message.contextTypes={
    removeMes:Proptypes.func
};
export default Message