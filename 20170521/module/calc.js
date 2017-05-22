let calc = {
    "+"(a,b){
        return a+b;
    },
    "-"(a,b){
        return a-b;
    }
};
//exports.calc = calc;
module.exports.calc = calc;
//console.log(1+ +"3");//4 先处理+"3"  可以变为数字3