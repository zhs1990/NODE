import {FETCH_WORDS,FETCH_SUCCESS} from "./action-types"
import $ from "jquery";
export default {
    fetchWords(wd){
        return function (dispatch) {
            dispatch({type:FETCH_WORDS});
            $.ajax({
                url:"http://www.baidu.com/su",
                data:{wd},
                jsonp:"cb",
                dataType:"jsonp",
                context:this,//指定回调函数中this的指向
                success:function (result) {
                    dispatch({type:FETCH_SUCCESS,words:result.s});
                }
            });
        }
    }
}