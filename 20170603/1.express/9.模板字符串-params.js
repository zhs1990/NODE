let pattern = "/users/${id}/${name}";
let request = "/users/1/zhs";
//{id:1,name:"zhs"}
let params = {};
let paramNames = [];
pattern = pattern.replace(/\$\{(\w+)\}/g,function(){
    console.log(arguments);
    paramNames.push(arguments[1]);
    return "(\\w+)";
});
//console.log(paramNames);
let result = request.match(new RegExp(pattern));
//console.log(result);
for(var i=0;i<paramNames.length;i++){
    params[paramNames[i]] = result[i+1];
}
//console.log(params);