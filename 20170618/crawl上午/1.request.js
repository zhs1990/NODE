let request = require("request");
let iconv = require("iconv-lite"); //转换编码库
let cheerio = require("cheerio");
let url = "http://top.baidu.com/category?c=1&fr=topindex";
//err  错误对象
//response  响应对象
//body   响应体
//encoding:null 不要自动转换编码
request({url,encoding:null},function (err,response,body) {
    body = iconv.decode(body,"GBK");//将响应体转换为指定编码输出
    let $ = cheerio.load(body);
    let categories = [];
    $(".hd .title a").each(function (index,item) {
        let $this = $(item);
        let category = {
            name:$this.text(),
            url:$this.attr("href")
        };
        let result = category.url.match(/b=(\d+)/);
        category.id = result[1];
        categories.push(category);
    });
    console.log(categories);
});