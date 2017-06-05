// let url = require("url");
// function createApplication(){
//     //当app服务器收到请求后，会交有app函数处理，并把最原始的req和res给他
//     let app = function(req,res){
//         let pathname = url.parse(req.url,true).pathname;
//         for(let i=0;i<app.routes.length;i++){
//             let route = app.routes[i];
//             //如果本次请求的方法名和路径名都和此条规则相匹配，那么此规则的监听 函数就是我们需要的处理函数
//             if(route.method == req.method&&route.pathname == pathname ){
//                 return route.listener(req,res);
//             }
//         }
//         res.end("404 NOT FOUND");
//     };
//     //在app内部缓存一个路由的数组
//     app.routes = [];
//     app.get = function(pathname,listener){
//         app.routes.push({method:"GET",pathname,listener});
//     };
//     app.listen = function(port,callback){
//         //app其实是一个监听函数
//         require("http").createServer(app).listen(port,callback);
//     };
//     return app;
// }
// module.exports = createApplication;





let url = require("url");
function createApplication(){
    let app = function(req,res){
        let pathname = url.parse(req.url,true).pathname;
        for(var i=0;i<app.routes.length;i++){
            let route = app.routes[i];
            if(route.method == req.method && route.pathname == pathname){
                return route.listener(req,res);
            }
        }
        res.end("404 NOT FOUND");
    };
    app.routes = [];
    app.get = function(pathname,listener){
        app.routes.push({method:"GET",pathname,listener});
    };
    app.listen = function(port){
        require("http").createServer(app).listen(port);
    };
    return app;
}
module.exports = createApplication;