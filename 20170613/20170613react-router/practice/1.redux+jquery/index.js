import {createStore} from "./redux";
import $ from "jquery"
//state是旧的状态对象   action是动作对象 {type:"INCREMENT"}
let reducer = (state=0,action={})=>{
    switch (action.type){
        case "INCREMENT":
            return state+1;
        case "DECREMENT":
            return state-1;
        default:
            return state;
    }
};
let store = createStore(reducer);

$(document.body).append(`
    <div>
        <p id="counter"></p>
        <button id="addBtn">+</button>
        <button id="subBtn">-</button></div>
`);
//当state发生改变时，触发订阅subscribe
let render = ()=>$("#counter").html(store.getState());
store.subscribe(render);
render();

//简化调用，不容易出错
let add = ()=>{
    return   {
        type:"INCREMENT"
    }
};
let sub = ()=>{
    return   {
        type:"DECREMENT"
    }
};
$("#addBtn").click(()=>{
    store.dispatch(add());
});
$("#subBtn").click(()=>{
    store.dispatch(sub());
});
