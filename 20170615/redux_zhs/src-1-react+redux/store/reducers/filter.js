import * as actionTypes from "../action-types"
export default function(state="all",action={}){
    switch(action.type){
        //改变过滤器类型
        case actionTypes.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}