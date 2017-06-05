import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);//初始化状态库
export default new Vuex.Store({
    state:{ //数据状态
        count:1,
        say:"hello vuex"
    },
    getters:{//store的计算属性,如何得到计算过的属性
        newCount(state){
            return state.count+20;
        }
    },
    mutations:{
        modState(state){
            state.count+=20;
        }
    },
    actions:{
        aMode(context){//context对象包含 commit方法 dispatch方法
            context.commit("modState");
            context.commit("subState");
        }
        // aMode({commit}){//context对象包含 commit方法 dispatch方法
        //     commit("modState");
        //     //commit("subState");
        // }
    }
});