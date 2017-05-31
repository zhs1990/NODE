//收敛 返回叠加后的结果
var total = [1,2,3,4].reduce(function(prev,next){
    console.log(prev,next);
    //return 100; //返回值会作为下一次的上一次prev结果
    return prev+next;
});//第二个参数 是手动指定第一次的上一次
console.log(total);