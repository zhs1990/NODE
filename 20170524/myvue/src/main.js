import Vue from 'vue'  //导入一个vue模块  得到里面的Vue
import App from './App.vue' //将单文件组件导入进来
import Hello from './components/hello.vue'
import Zhs from './components/zhs.vue'

new Vue({
  el: '#app',
  //render: h => h(App) //将组件渲染到页面中
  components:{ //注册组件
      App,
      Hello,
      Zhs
  }
})
