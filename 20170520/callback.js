//如何解决异步问题？  回调函数
//配置es6 + 配置node环境
//language - javascript
//npm - enable

function read(cb){
    setTimeout(function(){
        let result = "hello";
        cb(result);
    },2000);
}
read(function(result){
    console.log(result);
});
//当调用read方法时，传入后续的逻辑函数，作为参数