let fs = require("fs");
//promise 有三个方法  resolvec成功的回调  reject失败的回调  支持高版本浏览器
var school = {};
function readName(){
    return new Promise(function(resolve,reject){
        fs.readFile("./1.txt","utf-8",function(err,data){
            if(err)reject(err);
            resolve(data);
        });
    })
}
// readName().then(function(data){//成功
//     console.log(data);
//     school.name = data;
// }).catch(function(err){//失败
//
// });
function readAge(){
    return new Promise(function(resolve,reject){
        fs.readFile("./2.txt","utf-8",function(err,data){
            //error-first
            if(err)reject(err);
            resolve(data);
        });
    });
}
//all 方法是promise对象自带的，第一个参数是数组，数组放的是promise对象,并发执行
Promise.all([readName(),readAge()]).then(([age,name]) => {//解构
    //console.log(result);//result的结果顺序和数组中的顺序是一致的
    school = {age,name};
    console.log(school);
});



