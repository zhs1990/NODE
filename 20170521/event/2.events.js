let events = require("events");
let util = require("util");
util.inherits(Girl,events);
//多次触发多次执行
function Girl(){

}
let girl = new Girl();
function cry(who){
    console.log(who+"大哭");
}
function eat(who){
    console.log(who+"吃");
}
function shopping(who){
    console.log(who+"购物");
}
//订阅,绑定
girl.once("失恋了",cry); //只执行一次
girl.on("失恋了",cry);
girl.on("失恋了",eat);
girl.on("失恋了",shopping);
girl.removeListener("失恋了",shopping);
//发布，触发
girl.emit("失恋了","张红爽");
girl.emit("失恋了","张红爽");