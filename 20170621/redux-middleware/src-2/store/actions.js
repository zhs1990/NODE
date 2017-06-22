import {ADD,SUB,COUNTING} from "./actionTypes";
export default {
    //ActionCreateor就是action的创建器，用来创建action的
    //redux中action必须是一个纯对象
    add(){
        return function (dispatch) {
            dispatch({type:"COUNTING"});
            setTimeout(function () {
                dispatch({type:"ADD"});
            },3000);
        }
    },
    sub(){
        return function (dispatch) {
            dispatch({type:"COUNTING"});
            setTimeout(function () {
                dispatch({type:"SUB"});
            },3000);
        }
    }
}