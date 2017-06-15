import React from "react";
import store from "../store"
import * as actionTypes from "../store/action-type"
class Todos extends React.Component{
    constructor(){
        super();
        this.state = {todos:[]};
    }
    componentWillMount(){
        store.subscribe(()=>{
            let todos = store.getState().todos;
            let filter = store.getState().filter;
            todos = todos.filter(todo=>{
                switch (filter){
                    case "active":
                        return !todo.completed;
                    case "completed":
                        return todo.completed;
                    default:
                        return true;
                }
            });
            this.setState({
                todos
            });
        })
    }
    handleKeyDown = (event)=>{
        if(event.keyCode==13){
            let content = event.target.value;
            store.dispatch({type:actionTypes.ADD_TODO,content});
        }
    }
    handleClick = (id)=>{
        store.dispatch({
            type:actionTypes.DELETE_TODO,
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
class Filter extends React.Component{
    constructor(){
        super();
        this.state = {filter:"all"};
    }
    componentWillMount(){
        store.subscribe(()=>{
            this.setState({
                filter:store.getState().filter
            });
        });
    }
    render(){
        return (
            <div>
                {
                    this.state.filter=="all"?<span>全部</span>: <button onClick={()=>store.dispatch({type:actionTypes.CHANGE_FILTER,filter:"all"})}>全部</button>
                }
                {
                    this.state.filter=="active"?<span>未完成</span>:<button onClick={()=>store.dispatch({type:actionTypes.CHANGE_FILTER,filter:"active"})}>未完成</button>
                }
                {
                    this.state.filter=="completed"?<span>已完成</span>: <button onClick={()=>store.dispatch({type:actionTypes.CHANGE_FILTER,filter:"completed"})}>已完成</button>
                }
            </div>
        );
    }
}
class TodoApp extends React.Component{
    render(){
        return (
            <div>
                <Todos/>
                <Filter/>
            </div>
        );
    }
}

export default TodoApp;