let express = require("express");
let cookieParser = require("cookie-parser");
let app = express();
const SESSION_KEY = "connect.sid";
//这里存放所有的会话数据
let sessions = {};
/*
* 1,第一次访问的时候，商家会送给1000元的余额
* 2，每次访问的时候，都会扣掉100元
* */
app.use(cookieParser());
app.get("/visit",function(req,res){
    //看看客户端有没有sessionId
    let sessionId = req.cookies[SESSION_KEY];
    if(sessionId){
        let sessionObj = sessions[sessionId];
        if(sessionObj){
            sessionObj.balance -= 100;
            res.send(`欢迎再次光临，卡上余额${sessionObj.balance}元`);
        }else{
            newCard();
        }
    }else{//第一次是没有sessionId的
        newCard();
    }
    function newCard(){
        //1，保证卡号是唯一的,2，保证不容易猜出来
        let newSessionId = new Date().getTime()+Math.random();
        //在服务器端开辟一块内存，记录此卡号的数据
        sessions[newSessionId] = {balance:1000};
        res.cookie(SESSION_KEY,newSessionId);
        res.send(`欢迎第一次光临，送你一张会员卡，卡上余额1000元`);
    }
});

app.listen(8080);