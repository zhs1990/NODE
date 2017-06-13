let express = require("express");
let Article = require("../model").Article;
let router = express.Router(); //返回router实例
//当客户端以GET方法访问/的时候，执行对应的回调函数
router.get("/",function(req,res) {
    let {keyword,pageNum,pageSize} = req.query;
    pageNum = isNaN(pageNum)?1:parseInt(pageNum);//当前页码
    pageSize = isNaN(pageSize)?3:parseInt(pageSize); //页面条数
    let query = {};
    if(keyword){
        let reg = new RegExp(keyword);
        //query.title = reg;
        //$or 代表 或
        query["$or"] = [{title:reg},{content:reg}];
    }
    //符合条件的数量
    Article.count(query,function (err,count) {
        //populate() 填充   将user字符串转换成对象
        Article.find(query).sort({createAt:-1}).skip((pageNum-1)*pageSize).limit(pageSize).populate("user").exec(function(err,indexs){
            res.render("index",{
                title:"首页",
                indexs,
                keyword,
                totalPages:Math.ceil(count/pageSize),
                pageNum, //当前页码
                pageSize //每页数量
            });
        });
    });
});

module.exports = router;