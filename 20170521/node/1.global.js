//console.log(global);
//process   进程
//buffer    缓冲区
// clearImmediate: [Function],      清除立即
// clearInterval: [Function],
// clearTimeout: [Function],
// setImmediate: [Function],
// setInterval: [Function],
// setTimeout: [Function],
// console: [Getter]  log info dir error warn time timeEnd

//1,console time timeEnd  可以计算时间差
// console.time("start");
// for(let i=0;i<1000000000;i++){}
// console.timeEnd("start");

//2.setTimeout
//this代表定时器自己
/*
* 改变this的方法:改变函数中的this指向
*   1,call和apply会导致函数执行
*   2,bind不会导致函数执行,bind的使用规则：bind只能绑定一次
*   3,var that = this;    在定时器中使用that
*   4,使用箭头函数处理this，因为自己没有this，从而解决了this问题
* */
// let obj = {
//     a:function(){
//         setTimeout(function(){
//             console.log(this);
//         }.bind(this),1000);
//     }
// };
// obj.a();


//3,想要给eat传参数
    /*
    * 3想要给eat传参数
    * 1，回调函数
    * 2，eat.bind(null,"苹果");
    * 3，可以在setTimeout方法的第三个参数以后进行传递 setTimeout(eat,1000,'苹果');
    * */
// function eat(what){
//     console.log(what);
// }
// setTimeout(eat,1000,'苹果');
//1），获取参数集合（将arguments转化为数组）
/*
 获取参数集合（将arguments转化为数组）
* 1， let args = [].slice.call(arguments,1);
* 2，let args2 = Array.from(arguments).slice(1);
* 3，剩余运算符...args 将其他参数转化为数组类型
  *     在参数中可以做 剩余运算符...args
  *     在 中可以做 拓展运算符 [...arr,...arr1]
* */
function eat(what,...args){
    //获得除了第一个参数以外的后面的所有参数
    console.log(arguments);
    //将arguments转化为数组
    //let args = [].slice.call(arguments,1);
    //let args2 = Array.from(arguments).slice(1);
    console.log(args);
}
//eat("苹果","香蕉");

// var arr = [1,2,3];
// var arr2 = [4,5,6];
// console.log([...arr,...arr2]);

//3,setImmediate 异步  ---- node中方法  ---- 如果没有设置时间，会采用setImmediate
    //不识别放置时间

// setImmediate(function(){
//     console.log(11);
// },2000);
// setTimeout(function(){
//     console.log(222);
// },3000);







