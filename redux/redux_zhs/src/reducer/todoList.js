import * as actionTypes from '../store/action-types'
let todoList = (state=[],action={})=>{
    switch (action.type){
        case actionTypes.ADD_TODO:
            return [...state,{id:Date.now(),content:action.content,completed:false}];
        case actionTypes.DEL_TODO:
            return state.filter(todo=>todo.id!=action.id);
        case actionTypes.TOGGLE_TODO:
            return state.map(todo=>{
                if(todo.id==action.id){
                    todo.completed = !todo.completed;
                }
                return todo;
            });
        default:
            return state;
    }
};
export default todoList;