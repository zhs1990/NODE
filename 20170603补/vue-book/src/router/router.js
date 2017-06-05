import Vue from "vue"
import VueRouter from "vue-router"
import List from "../components/list.vue"
import Add from "../components/add.vue"
import Detail from "../components/detail.vue"

Vue.use(VueRouter);//初始化安装

//创建路由表

const routes = [
    {path:"/list",component:List},
    {path:"/add",component:Add},
    {path:"/detail:id",name:"detail",component:Detail},
    {path:"*",redirect:"/list"}
];
//创建路由实例
export default new VueRouter({
    routes
});