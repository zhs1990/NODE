import React,{Component} from "react";
import ReactDOM,{render} from "react-dom";
import TodoApp from "./components/TodoApp"
import store from "./store";
import {Provider} from "react-redux";

//provider可以让所有的子组件拿到store
render(
<Provider store={store}>
    <TodoApp/>
</Provider>,document.getElementById("root"));