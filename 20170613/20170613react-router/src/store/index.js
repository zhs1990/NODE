import * as actionTypes from "./action-type";
import {createStore,combineReducers} from "../redux";
//todo组件的reducer
let todos = (state=[],action={})=>{
    switch (action.type){
        case actionTypes.ADD_TODO:
            return [...state,{id:Date.now(),content:action.content,completed:false}];
        case actionTypes.DELETE_TODO:
            return state.filter(item=>item.id!=action.id);
        default :
            return state;
    }
};
//filter组件的reducer
let filter = (state="all",action={})=>{
    switch (action.type){
        case actionTypes.CHANGE_FILTER:
            return action.filter;
        default :
            return state;
    }
};
//把两个reducer进行合并，返回合并后的reducer
let reducer = combineReducers({
    todos,
    filter
});
let store = createStore(reducer);
export default store;