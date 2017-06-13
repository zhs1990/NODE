let express = require("express");
let router = express.Router();
let User = require("../model").User;
let utils = require("../utils");
let multer = require("multer");
let middleWare = require("../middleware");
//在node中的文件路径是相对启动server的文件的目录
//加载模块是相对于当前文件的
let upload = multer({dest:"./public/uploads"});
//当客户端访问/user/signup 时候,交由此路由来处理
router.get("/signup",middleWare.checkNotLogin,function (req,res) {
    res.render("user/signup",{title:"用户注册"});
});
//upload.single("avatar")  返回一个中间件函数  req.file  上传的头像  req.body   文本内容
router.post("/signup",upload.single("avatar"),function (req,res) {
    //1，得到客户端的请求体
    let user = req.body;
    let avatar = req.file;
    ///uploads/fe489706cb24fc15526202b1db9fb569
    user.avatar =  `/uploads/${req.file.filename}`;
    user.password = utils.encry(user.password);
    //查询一下数据库中是否有与此用户名相同
    User.findOne({username:user.username},function(err,oldUser){
        if(err){
            res.redirect("back");
        }else{
            if(oldUser){
                req.flash("error","此用户名已经被占用，请换一个用户名");
                res.redirect("back");
            }else{
                User.create(user,function(error,doc){
                    if(error){//如果error有值，就表示注册失败，返回注册页面继续填写
                        res.redirect("back");
                    }else{
                        req.flash("success","注册成功");
                        res.redirect("/user/signin");
                    }
                });
            }
        }
    });
});
router.get("/signin",middleWare.checkNotLogin,function (req,res) {
    res.render("user/signin",{title:"用户登录"});
});
router.post("/signin",function (req,res) {
    let user = req.body;
    user.password = utils.encry(user.password);
    User.findOne(user,function(error,doc){
        if(error){
            res.redirect("back");
        }else{
            if(doc){
                //向会话中写入一个消息，  消息类型,消息内容
                req.flash("success","登录成功");
                //req.session.success = "登录成功";
                //把当前登录成功之后的用户对象放置在session对象中
                req.session.user = doc;
                res.redirect("/");
            }else{
                req.flash("error","登录失败");
                //req.session.error = "登录失败";
                res.redirect("back");
            }
        }
    });
});
router.get("/signout",middleWare.checkLogin,function (req,res) {
    req.session.user = null;
    res.redirect("/user/signin");
});
module.exports = router;


/*
* 分析req.file
* { fieldname: 'avatar',  //表单中的input字段名
     originalname: '1.jpg',  //上传文件的原始文件名
     encoding: '7bit',
     mimetype: 'image/jpeg',  //文件类型
     destination: './public/uploads',   //上传的文件的保存路径
     filename: 'fe489706cb24fc15526202b1db9fb569',   //在服务器端保存时的文件名
     path: 'public\\uploads\\fe489706cb24fc15526202b1db9fb569', //
     size: 7145   //文件大小
     }
*
* */