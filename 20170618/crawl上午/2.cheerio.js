let cheerio = require("cheerio");
let html = `
    <div class="hd">
      <h2 data="26" class="title">
           <a href="http://top.baidu.com/buzz?b=26">全部电影</a>
      </h2>
    </div>
    <div class="hd">
      <h2 data="27" class="title">
           <a href="http://top.baidu.com/buzz?b=27">动作电影</a>
      </h2>
    </div>
    `;
let $ = cheerio.load(html);//加载字符串解析成DOM树
let movies = [];
$(".hd .title a").each(function (index,item) {
    let $this = $(item);
    let movie = {
        name:$this.text(),
        url:$this.attr("href")
    };
    let result = movie.url.match(/b=(\d+)/);
    movie.id = result[1];
    movies.push(movie);
});
console.log(movies);