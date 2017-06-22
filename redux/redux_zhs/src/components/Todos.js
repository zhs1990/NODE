import React from "react";
import TodoList from "./TodoList"
import TodoFilter from "./TodoFilter"

export default class Todos extends React.Component{
    render(){
        return (
            <div>
                <TodoList />
                <TodoFilter />
            </div>
        );
    }
}