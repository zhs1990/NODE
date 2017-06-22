/*
* 项目中会把express+socket.io配合使用
* express 用来返回静态文件和动态路由
* socket.io 用来发送和接受消息
*
* 1，实现匿名聊天 ok
* 2，实现具名聊天 ok
* 3，实现私聊 ok
*       a,让用户名可以点击
*       b，当用户名点击的时候会在输入框里插入字符 @用户名
*       c,输入你想说的话
*       d,发送给服务器
*       e,服务器会向对应的用户单个发送消息
* 4，数据持久化 ok
* 5，在系统加载时自动加载最近的20条数据 ok
* 6，分房间聊天
* 7，消息的撤消和删除
* */
let express = require("express");
let path = require("path");
let Message = require("./model").Message;
let app = express();
app.use(express.static(path.resolve("../node_modules")));
app.get("/",function (req,res) {
    //res.sendFile(path.resolve("./index.html")); //通过path模块得到文件的绝对路径
    res.sendFile("./index.html",{root:__dirname}); //通过root来配置绝对路径
});
//创建一个http服务器
let server = require("http").createServer(app);
//socket.io依赖http服务器的
let io = require('socket.io')(server);
//在全局下声明一个对象，key是用户名，值是对应的socket对象
let sockets = {};
//当客户端连接到服务器之后，执行对应的回调函数
io.on("connection",function (socket) {
    //连接成功之后，向客户端发送一条消息
    //socket.send("欢迎来到珠峰聊天室"); //可以省略这句话
    //用来存放此用户的用户名
    let username;
    let currentRoom;
    //当服务器收到客户端发送来的消息之后回复给客户端一条消息
    socket.on("message",function (msg) {
        if(username){//如果username有值，则意味着设置过昵称
            //匹配传递回来的消息中是否存在@用户名的格式来确定是公聊还是私聊
            let reg = /@([^ ]+) (.+)/;
            let result = msg.match(reg);
            if(result){
                let toUser = result[1];
                let content = result[2];
                sockets[toUser].send({
                    username,
                    content,
                    createAt:new Date()
                });
            }else{
                Message.create({
                    username,
                    content:msg
                },function (err,doc) {
                    //广播，先所有连接到此服务器的客户端发送消息
                    if(currentRoom){//如果此用户在某个房间内
                        //那么先进入此房间才能发言，只有此房间的人才能听到
                        io.in(currentRoom).emit("message",doc);
                    }else{
                        io.emit("message",doc);
                    }

                });
            }
            //这个是向单个的客户端发送消息
            //socket.send("服务器："+msg);
        }else{//如果没有值，意味着这是次客户端发送的第一条消息，那么就会把这条消息的内容作为昵称
            username = msg;
            //当第一次设置
            sockets[username] = socket;
            io.emit("message",{
                username:"系统消息",
                content:"欢迎"+username+"加入聊天室",
                createAt:new Date()
            });
        }
    });
    socket.on("getAllMessages",function () {
        Message.find().sort({createAt:-1}).limit(20).exec(function(err,messages){
            messages.reverse();
            socket.emit("allMessage",messages);
        });
    });
    socket.on("join",function(room){
        if(currentRoom){//如果此用户已经在某个房间内了，需要先离开当前房间
            socket.leave(currentRoom);
        }
        //让此socket进入到某个房间，进入之后，此用户的发言只能在房间内的其它用户听到，其他房间的人听不到
        socket.join(room);
        currentRoom = room;
    });
    socket.on("del",function (id) {
        Message.remove({_id:id},function(err,result){
            io.emit("deleted",id);
        });
    });
});
server.listen(8080);