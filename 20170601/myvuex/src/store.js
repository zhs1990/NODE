//共享状态库（公共数据库），供多个单文件组件使用数据
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count:0
    },
    // getters:{ //当前状态库的计算属性
    //     newCount(state){
    //         return state.count+20;
    //     }
    // },
    mutations:{//配合devtool使用
        // addFn(state,preload){//state状态对象
        //     state.count+=preload.count;//响应state
        // }
        addFn(state){//state状态对象
            state.count++;//响应state
        }
    },
    actions:{
        modState(context){//context--对象
            context.commit("addFn"); //将状态由actions提交给mutations =>
        }
    }
});