//find  filter  map

var arr = [
    {id:1},
    {id:2},
    {id:3},
    {id:4}
];
//查找id为2的那一项，如果找到那一项，会将那一项返回出去
var newVal = arr.find(function(item){
    //console.log(item);
    // if(item.id===2){
    //     return true;
    // }
    return item.id === 2;
});
//console.log(newVal);

//将id>2的项过滤出来
var newArr = arr.filter(function (item) {
    if(item.id>2){
        return true;
    }
    //return item.id>2
});
//console.log(newArr);


//过滤到id为3的数组内容
var newAs = arr.filter(function (item) {
    return item.id!=3;
});
console.log(newAs);

//会将每一次的返回值作为新数组中的每一项，用来修改一个数组的内容
var newA = arr.map(function(item){
    if(item.id===2){
        return {id:20}
    }
    return item;
});
//console.log(newA);