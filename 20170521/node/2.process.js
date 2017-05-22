//4.进程 process
console.log(process.pid);
/*
*   process
*   process pid
*   process.kill(process.pid);  关闭进程
*   process.exit(); //正常状态下退出进程
*
*   区分开发环境和上线环境
*   在电脑上设置变量 cmd中 ，process.env代表当前进程的环境变量
*       set NODE_EVN=development
* */
//判断条件一般都是三个等号，判断null或者undefined可以用两个等号
if(process.env.NODE_EVN === "development"){
    console.log("开发环境");
}else{
    console.log("线上环境");
}

//process.nextTick  下一队列 （当前队列底部）  执行速度快于setImmediate与setInterval
//重要的事情放在nextTick中，不重要的事情放在setImmediate
setImmediate(function(){
    console.log(222);
});
process.nextTick(function(){
    console.log(111);
});