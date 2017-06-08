import React,{Component} from "react"
export default class TodoItem extends Component{
    del = ()=>{
        this.props.delTodo(this.props.item.id);
    }
    handleKeyDown = (event,id)=>{
        let code = event.keyCode;
        if(code===13){
            let content = event.target.value;
            this.props.changeContent(id,content);
        }
        if(code===27){
            this.props.cancelEdit();
        }
    }
    render(){
        return (
            <li className="list-group-item" >
                <input type="checkbox" onChange={()=>this.props.toggle(this.props.item.id)} checked={this.props.item.completed} />
                {
                    this.props.editing===this.props.item.id?<input style={{marginLeft:"10px"}} type="text" defaultValue={this.props.item.content} onKeyDown={(event)=>this.handleKeyDown(event,this.props.item.id)} />:<span style={{marginLeft:"10px",textDecoration:this.props.item.completed?'line-through':"none"}} onDoubleClick={()=>this.props.changeEditing(this.props.item.id)}>{this.props.item.content}</span>
                }


                <button type="button" onClick={this.del} className="btn btn-danger btn-xs pull-right">删除</button>
            </li>
        );
    }
}