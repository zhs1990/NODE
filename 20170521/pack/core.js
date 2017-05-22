//call
function Parent(){
    this.cardId = "220122";
}
Parent.prototype.eat = function(){
    console.log("吃肉");
};

let util = require("util");
util.inherits(Child,Parent);//只继承公有属性
var chil = new Child();
console.log(chil);
console.log(util.isArray([])); //true
console.log(util.isFunction([])); //false






//第一种 this
// function Child(){
//     Parent.call(this);
// }
// let child = new Child();
// console.log(child);

//第二种
//new 不能传递参数
//继承私有属性，又继承公有属性
// function Child(){
//     console.log(this);
//     this.abc = 100;
// }
// Child.prototype = new Parent();
// var chil = new Child();
// console.log(chil);

//第三种 继承公有属性  原型链操作
function Child(){

}
// Child.prototype.__proto__ = Parent.prototype;
// var n = new Child();
// console.log(n);

//第四种  继承公有 es5
//儿子的原型只有父类的公有属性
// function create(parentPro){
//     let Func = function(){
//
//     };
//     Func.prototype = parentPro;
//     return new Func();
// }
// Child.prototype = Object.create(Parent.prototype);
// function Child(){
//
// }
//
// //第五种  es6  Object.setPrototypeof();
// Object.setPrototypeof(Child.prototype,Parent.prototype);
//
// let child = new Child();

