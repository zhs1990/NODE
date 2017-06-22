let express = require("express");
let Movie = require("./model");
let path = require("path");
let app = express();
app.set("view engine","ejs");
app.use(express.static(path.resolve("../node_modules")));
app.get("/",function (req,res) {
    Movie.find({},function (err,movies) {
        res.render("index",{movies});
    });
});
app.listen(8080);