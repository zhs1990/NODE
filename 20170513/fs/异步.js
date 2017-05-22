setTimeout(function(){
    console.log("111");
},0);
console.log(222);


function fn(callBack){
    setTimeout(function(){
        callBack("哈哈");
    },3000);
}
fn(f3);

function fe(result){
    console.log(result);
}