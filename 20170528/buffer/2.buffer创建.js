//1,通过长度创建buffer
//buffer长度是固定的，创建之后不可随意改变
var buffer = new Buffer(6);
buffer.fill(0); //手动填充buffer，清空内存
//console.log(buffer);//通过长度长度创建的buffer，内容是随机的

//2,通过数组创建buffer
var buffer = new Buffer([100,120,140]);
//如果数组中的某一个不能正确转换则是0
//如果超过255，则对256取膜
//如果写负数，则加上256
//var buffer = new Buffer(["a",120,140]);
//console.log(buffer);

//3,通过字符串创建buffer
var buffer = new Buffer("珠峰培训");
//console.log(buffer.toString());//将buffer格式转化成字符串
//console.log(buffer.length);//buffer长度，字节的长度
//console.log(buffer[0]);//如果取buffer中的某一个则是16进制代表的10进制

//1,Buffer.toString();
//2,Buffer.slice();  截取 包前不包后  也可以修改原有的buffer内容
//3,buffer.copy(目标buffer，目标的开始位置，源的开始，源的结束),可以将小的buffer拷贝到大的buffer上
//4,Buffer.concat([buf1,buf2]);
// 返回的还是buffer,如果不写长度，默认拼接后的长度，如果写的过长，多余的要截取掉,如果长度过小，则拷贝不进去

var buffer = new Buffer(12);
var buf1 = new Buffer("珠峰培");
var buf2 = new Buffer("训");
//目标buffer，目标的开始位置，源的开始，源的结束
//buf1.copy(buffer,0,0,buf1.length);
//buf2.copy(buffer,buf1.length,0,buf2.length);
//console.log(buffer.toString());

//console.log(Buffer.concat([buf1,buf2]).toString());
Buffer.myConcat = function(list,totalLength){
    //1，不传递长度的情况下，计算出一个总长度，根据计算出的长度构建一个大buffer
    if(typeof totalLength === "undefined"){
        totalLength = list.reduce(function(prev,next){
            return prev.length+next.length;
        });
    }
    //2，如果传递长度，就按照传的长度来构建buffer  new Buffer()
    var buffer = new Buffer(totalLength);
    //3，将list中的每一个buffer拷贝到大buffer中 copy()
    var index = 0;
    list.forEach(item => {
        item.copy(buffer,index);
        index+=item.length;
    });
    //4，截取掉多余的长度  slice
    return buffer.slice(0,index);
};
Buffer.myConcat([buf1,buf2],12);



var arr = [1,2,3,4];
var ary = [arr,1,2,3];
var newArr = ary.slice(0);//浅拷贝
arr[0] = 100;
//console.log(newArr);


//buffer中存的也是内存地址，可以将buffer看成是一个二维数组,buffer

var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(0,1);
console.log(buffer);
newBuffer[0] = 100;
console.log(buffer);

//如何拷贝一个对象  递归循环
var obj = {name:1,age:2,a:function(){}};
//var obj2 = obj;
//var obj2 = JSON.parse(JSON.stringify(obj2));
//stringify不识别函数

var obj1 = {};
//ES6拷贝对象
Object.assign(obj1,obj,{age:3});
//console.log(obj1);
//console.log(obj1===obj);
