//es6构造函数
// class Person{
//     constructor(name){ //当new这个类的实例的时候执行函数
//         this.name = name;
//     }
// }
// let p1 = new Person("zhs");
// console.log(p1);

//es5构造函数
function Person(name){
    this.name = name;
}
Person.prototype.geName = function(){
    console.log(this.name);
};
let p2 = new Person("zhs2");
p2.geName();


//箭头函数的使用情况
//如果希望函数中的this指向调用此函数的对象，不能用箭头函数
// 如果希望函数中的this为固定定义的时候的外层this，这时应该用箭头函数