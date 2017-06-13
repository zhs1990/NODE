//检出此用户必须登录，只有登陆后才能继续访问
//未登录不能继续访问
exports.checkLogin = function (req,res,next) {
    if(req.session.user){ //如果已经登录
        next();
    }else{ //如果未登录
        req.flash("error","你尚未登录，请登录后再访问此页面");
        res.redirect("/user/signin");
    }
};
//要求未登录才能访问
exports.checkNotLogin = function (req,res,next) {
    if(req.session.user){
        req.flash("error","你已经登录过了，请不要重复登录");
        res.redirect("/");
    }else{
        next();
    }
};