let express = require("express");
let Article = require("../model").Article;
let Category = require("../model").Category;
let router = express.Router();

router.get("/add",function (req,res) {
    Category.find({},function (err,categories) {
        res.render("article/add",{title:"添加文章",categories,article:{}});
    });
});
router.post("/add",function (req,res) {
    let article = req.body;
    article.user = req.session.user._id;
    Article.create(article,function (err,doc) {
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
});
router.get("/detail/:_id",function (req,res) {
    //.populate("category") 把分类id变成分类对象
    //.populate("user") 把用户id变成用户对象
    //$inc  increase  增加阅读量  原来的值加1
    Article.update({_id:req.params._id},{$inc:{pageView:1}},function (err,result) {
        Article.findById(req.params._id).populate("category").populate("user").exec(function(err,article){
            console.log(article);
            res.render("article/detail",{title:"文章详情",article});
        });
    });

});
router.get("/delete/:_id",function (req,res) {
    Article.remove({_id:req.params._id},function(err,doc){
        if(err){
            res.redirect("back");
        }else{
            res.redirect("/");
        }
    });
});
router.get("/update/:_id",function(req,res){
    Article.findById(req.params._id).exec(function (err,article) {
        Category.find({},function (err,categories) {
            res.render("article/add",{title:"编辑文章",categories,article});
        });
    });
});
router.post("/update/:_id",function (req,res) {
    let _id = req.params._id;
    let article = req.body;
    Article.update({_id},article,function (err,result) {
        console.log(result);
        if(err){
            res.redirect("back");
        }else{
            res.redirect(`/article/detail/${_id}`);
        }
    });
});

module.exports = router;

