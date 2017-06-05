import Vue from 'vue'
import {Zhs,Tl} from "./components"
import store from "./store.js"

new Vue({
    el: '#app',
    components:{
        Zhs,
        Tl
    },
    store
});
