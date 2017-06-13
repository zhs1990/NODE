import React,{Component} from "react"
export default class TodoHeader extends Component{
    addTodo = (event)=>{
        if(event.keyCode===13){
            let content = this.refs.content.value;
            let newMsg = {};
            if(content){
                newMsg.content = content;
                if(this.props.todos.length===0){
                    newMsg.id = 1;
                }else{
                    newMsg.id = this.props.todos[this.props.todos.length-1].id+1;
                }
                newMsg.completed = false;
                this.props.add(newMsg);
                this.refs.content.value = "";
            }
        }
    }
    render(){
        return (
            <input ref="content" type="text" className="form-control" placeholder="请输入你的愿望" onKeyDown={this.addTodo} />
        );
    }
}