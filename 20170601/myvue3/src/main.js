import Vue from 'vue'
import {Index,Hello} from "./components"
import store from "./store"

new Vue({
    el: '#app',
    components:{
        Index,
        Hello
    },
    store:store
});
