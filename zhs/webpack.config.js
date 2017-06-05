let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require("webpack");

module.exports = {
    entry:{
        main:"./src/index.js",
        main2:"./src/index2.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        filename:"[name].[hash].js"
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/"
            },{
                test:/\.vue$/,
                loader:"vue-loader"
            },{
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },{
                test:/\.(jpe?g|png|g|gif|svg)$/,
                loader:"url-loader",
                options:{
                    limit:10000
                }
            }
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.common.js"
        },
        extensions:[".js",".css",".vue",".less"]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"自动生成html页面",
            favicon:"./src/assets/logo.png",
            template:"./index.html",
            chunk:["main","main2"]
        }),
        new webpack.optimize.CommonsChunkPlugin("common"),
    ]
};