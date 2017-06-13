import React,{Component} from "react"
import TodoItem from "./TodoItem"
export default class TodoList extends Component{
    handleChange = (event)=>{
        this.props.toggleAll(event.target.checked);
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.todos.length>0?<li className="list-group-item">
                            <input type="checkbox" checked={this.props.activeCount===0} onChange={this.handleChange} />
                            <span style={{marginLeft:"10px"}} >{this.props.activeCount===0?'全部取消':'全部选中'}</span>
                        </li>:null
                }

                {
                    this.props.todos.map((item,index)=><TodoItem
                        item={item}
                        key={index}
                        delTodo={this.props.delTodo}
                        toggle={this.props.toggle}
                        editing={this.props.editing}
                        changeEditing={this.props.changeEditing}
                        changeContent={this.props.changeContent}
                        cancelEdit={this.props.cancelEdit}
                    />)
                }
            </ul>
        );
    }
}