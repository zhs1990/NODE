//1，引入mongoose
let mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect("mongodb://127.0.0.1/20170617crawl");
let MessageSchema = new mongoose.Schema({
    username:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
exports.Message = mongoose.model("Message",MessageSchema);