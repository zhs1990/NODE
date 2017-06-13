let express = require("express");
let router = express.Router();

router.get("/signup",function (req,res) {
    res.render("user/signup",{title:"注册页面"});
});
router.get("/signin",function (req,res) {
    res.send("登录页面");
});
router.get("/signout",function (req,res) {
    res.send("退出页面");
});
module.exports = router;