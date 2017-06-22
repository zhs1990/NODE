import {FETCH_SUCCESS,FETCH_WORDS} from "./action-types"
export default function (state={words:[],status:""},action={}) {
    switch (action.type){
        case "FETCH_WORDS":
            return {...state,status:"加载中..."};
        case "FETCH_SUCCESS":
            return {status:"",words:action.words};
        default:
            return state;
    }
}