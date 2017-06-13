//1，引入mongoose模块
let mongoose = require("mongoose");
mongoose.Promise = Promise; //用es6自带的promise替代自带的promise库
let congif = require("./config");
let ObjectId = mongoose.Schema.Types.ObjectId;
//2，连接数据库  启动mongodb
mongoose.connect(congif.dbURL);
//3,定义模型骨架  定义文档的属性名和属性类型
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
});

//4，定义模型
let User = mongoose.model("User",UserSchema);

//导出
exports.User = User;

let CategorySchema = new mongoose.Schema({
    name:String
});
let Category = mongoose.model("Category",CategorySchema);
exports.Category = Category;

//title 标题  content 正文 creatAt 创建时间 user 作者 category 分类
let ArticleSchema = new mongoose.Schema({
    title:String,
    content:String,
    createAt:{type:Date,default:Date.now},
    //ref表示此外键引用的是user集合的主键
    user:{type:ObjectId,ref:"User"}, //成为外键
    category:{type:ObjectId,ref:"Category"},
    pageView:{type:Number,default:0}
});
let Article = mongoose.model("Article",ArticleSchema);
exports.Article = Article;
