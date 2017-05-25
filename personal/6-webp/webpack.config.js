let path = require("path");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        publicPath:"/zhs/",
        filename:"[name].js"
    }
};