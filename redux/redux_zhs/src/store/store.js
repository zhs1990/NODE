import * as actionTypes from "../store/action-types"
import {createStore,combineReducers} from "../redux"

let todos = (state=[],action={})=>{
    switch (action.type){
        case actionTypes.TODO_ADD:
            return [...state,{id:Date.now(),content:action.content,completed:false}];
        case actionTypes.TODO_DEL:
            return state.filter(item=>item.id!=action.id);
        default:
            return state;
    }
};

let filters = (state="all",action={})=>{
    switch (action.type){
        case actionTypes.FILTER_CHANGE:
            return action.filter;
        default:
            return state;
    }
};

let reducer = combineReducers({
    todos,
    filters
});
let store = createStore(reducer);
export default store;