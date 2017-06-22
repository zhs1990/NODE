import {ADD,SUB,COUNTING} from "./actionTypes"
export default function(state={number:0,status:""},action={}){
    switch(action.type){
        case ADD:
            return {number:state.number+1,status:""};
        case SUB:
            return {number:state.number-1,status:""};
        case COUNTING:
            return {...state,status:"计算中..."};
        default:
            return state;
    }
}