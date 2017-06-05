import Vue from 'vue'
import App from './App.vue'
import Hello from "./components/hello.vue"
import Index from "./components/index.vue"
import store from "./store.js"  //导入状态库

new Vue({
  el: '#app',
  components:{
    Hello,
    Index
  },
  store:store //注入到根实例中，可以在每个单文件组件中使用
});
