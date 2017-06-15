import React from "react"
import * as actionTypes from "../store/action-types"
import store from "../store/store"

class TodoAdd extends React.Component{
    constructor(){
        super();
        this.state = {todos:[]}
    }
    componentWillMount(){
        store.subscribe(()=>{
            let todos = store.getState().todos;
            let filters = store.getState().filters;
            todos = todos.filter((todo)=>{
                switch (filters){
                    case "active":
                        return !todo.completed;
                    case "completed":
                        return todo.completed;
                    default:
                        return true;
                }
            });
            this.setState({todos});
        });
    }
    handleKeyDown = (event)=>{
        if(event.keyCode==13){
            let content = event.target.value;
            store.dispatch({
                type:actionTypes.TODO_ADD,
                content
            })
            event.target.value = "";
        }
    }
    handleClick = (id)=>{
        store.dispatch({
            type:actionTypes.TODO_DEL,
            id
        })
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown} />
                <ul>
                    {
                        this.state.todos.map((item,index)=>(
                            <li key={index}>{item.content} <button onClick={()=>this.handleClick(item.id)}>-</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}
class TodoFilter extends React.Component{
    constructor(){
        super();
        this.state = {
            filter:"all"
        };
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                filter:store.getState().filters
            });
        });
    }
    render(){
        return (
            <div>
                {
                    this.state.filter=="all"?<span>全部</span>:<button onClick={()=>store.dispatch({type:actionTypes.FILTER_CHANGE,filter:"all"})}>全部</button>
                }
                {
                    this.state.filter=="active"?<span>未完成</span>:<button onClick={()=>store.dispatch({type:actionTypes.FILTER_CHANGE,filter:"active"})}>未完成</button>
                }
                {
                    this.state.filter=="completed"?<span>已完成</span>:<button onClick={()=>store.dispatch({type:actionTypes.FILTER_CHANGE,filter:"completed"})}>已完成</button>
                }
            </div>
        );
    }
}
class TodoApp extends React.Component{
    render(){
        return (
            <div>
                <TodoAdd />
                <TodoFilter />
            </div>
        );
    }
}
export default TodoApp;