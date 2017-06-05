import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        count:10
    },
    getters:{
        countGetter(state){
            return state.count + 20;
        }
    },
    mutations:{
        modState(state,n=2){
            state.count+=n;
        }
    },
    actions:{
        aMode({commit}){
            commit('modState');
        }
    }
});