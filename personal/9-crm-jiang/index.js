function getData(cb){
    ajax({
        url:"/user",
        type:"GET",
    }).then(function(data){
        cb(data);
    });
}
function bindHtml(data){
    console.log(data);
}
getData(bindHtml);