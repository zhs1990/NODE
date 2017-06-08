import React,{Component} from "react"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"
import * as filterTypes from "./filter-types"
export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[],//{id,content,completed}
            filter:filterTypes.SHOW_ALL,  //定义新的过滤条件
            editing:null //编辑中的
        };
    }
    //添加一条
    add = (msg)=>{
        this.state.todos.push(msg);
        this.setState({
            todos:this.state.todos
        });
    }
    //删除一条  根据id进行删除
    delTodo = (deleteId)=>{
        let todos = this.state.todos.filter((item)=>{
            return item.id!==deleteId;
        });
        this.setState({
            todos:todos
        });
    }
    //更改完成状态  根据id进行更改
    toggle = (id)=>{
        let todos = this.state.todos.map(item=>{
            if(item.id===id){
                item.completed = !item.completed;
            }
            return item;
        });
        this.setState({
            todos:todos
        });
    }
    toggleAll = (result)=>{
        let todos = this.state.todos.map((item)=>{
            item.completed = result;
            return item;
        });
        this.setState({
            todos:todos
        });
    }
    changeFilter = (type)=>{
        this.setState({
            filter:type
        });
    }
    clearAllCompleted = ()=>{ //删除已完成的
        let todos = this.state.todos.filter(item=>!item.completed);
        this.setState({todos});
    }
    changeEditing = (editingId)=>{
        this.setState({
            editing:editingId
        });
    }
    cancelEdit = ()=>{
        this.setState({
            editing:null
        });
    }
    changeContent = (id,content)=>{
        let todos = this.state.todos.map(item=>{
            if(item.id===id)item.content = content;
            return item;
        });
        this.setState({todos,editing:null});
    }
    render(){
        let showTodos = this.state.todos.filter(item=>{
            switch (this.state.filter){
                case filterTypes.SHOW_ACTIVE:
                    return !item.completed;
                    break;
                case filterTypes.SHOW_COMPLETED:
                    return item.completed;
                    break;
                default:
                    return true;
            }
        });
        //未完成的数量
        let activeCount = this.state.todos.filter(item=>!item.completed).length;
        return (
            <div className="container" style={{marginTop:'10px'}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader
                                    todos={this.state.todos}
                                    add={this.add} />
                            </div>
                            <div className="panel-body">
                                <TodoList
                                    todos={showTodos}
                                    delTodo={this.delTodo}
                                    toggle={this.toggle}
                                    activeCount={activeCount}
                                    toggleAll={this.toggleAll}
                                    editing={this.state.editing}
                                    changeEditing={this.changeEditing}
                                    changeContent={this.changeContent}
                                    cancelEdit={this.cancelEdit}/>
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                    activeCount={activeCount}
                                    changeFilter={this.changeFilter}
                                    filter={this.state.filter}
                                    clearAllCompleted={this.clearAllCompleted} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}