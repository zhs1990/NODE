import * as actionTypes from "../action-types"
//当前state只是todos组件需要的state，默认是个数组，action默认是空对象
export default function (state=[],action={}) {
    switch (action.type){
        case actionTypes.ADD_TODO:
            return [...state,{id:Date.now(),content:action.content,completed:false}];
        case actionTypes.DEL_TODO:
            return state.filter(todo=>todo.id!=action.id);
        //切换id对应的TODO的完成状态
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
}