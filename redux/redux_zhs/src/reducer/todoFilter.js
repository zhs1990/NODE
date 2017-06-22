import * as actionTypes from "../store/action-types"
let todoFilter = (state="all",action={})=>{
    switch (action.type){
        case actionTypes.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
};