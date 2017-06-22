import * as actionTypes from "./action-types";
export default function(state=0,action={}){
    switch (action.type){
        case actionTypes.ADD:
            return state+1;
        case actionTypes.SUB:
            return state-1;
        default:
            return state;
    }
}