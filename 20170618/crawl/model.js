let mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/20170618crawl");
let MovieSchema = new mongoose.Schema({
    name:String,
    url:String
});
module.exports = mongoose.model("Movie",MovieSchema);