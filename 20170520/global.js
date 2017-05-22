//前端的全局变量是window  服务端的全局变量是global
//全局对象，在当前文件夹下，可以直接使用的都是全局对象
//全局对象的组成：global上的属性+五个特殊形参
//node中没有window属性
//
console.log(this);//{},不是global
// setTimeout(function(){
//     console.log(this);//定时器中的this是定时器自己
// },1000);
// ~function(){
//     console.log(this);//global
// }();


var a = 100; //var 不能直接将内容挂载到global
//a = 100; //写代码不要丢掉var let const
const arr = []; //只要内存地址不变是可以改变内容
arr.push(a);
//同一个作用域{}下，变量不能声明两次，switch除外
console.log(global.a);//undefined

//箭头函数
//arrow func

// function sum(a,b){
//     return a+b;
// }
//如果使用了大括号，必须写return,否则可以省略大括号
// let sum = (a,b) => {
//     return a+b;
// };

// function a(a){
//     return function(b){
//         return a+b;
//     }
// }
// let a = a =>{
//     return b =>{
//         return a+b;
//     }
// };

let sum = a => b=> a+b;
console.log(sum(1)(2));