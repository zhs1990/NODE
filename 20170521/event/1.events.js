function Girl(){
    this._events = {};
}
Girl.prototype.on = function(eventName,callBack){
    if(this._events[eventName]){
        //第二次
        this._events[eventName].push(callBack);
    }else{
        //第一次
        this._events[eventName] = [callBack];
    }
};
Girl.prototype.emit = function(eventName,...others){
    if(this._events[eventName]){
        //如何将数组中的而每一个依次传入到函数中
        this._events[eventName].forEach(function(item){ //剩余运算符
            //由于这写法实在global下执行的，所以this指向global
            //item.apply(this,others);
            item.call(this,...others); //拓展运算符
        },this);//forEach的第二个参数是改变this指向
    }
};
Girl.prototype.removeListener = function(eventName,callBack){
    if(this._events[eventName]){ //filter  返回true  添加到新数组中，返回false  这项就不要了
        this._events[eventName] = this._events[eventName].filter(function(item){
            return item !== callBack;
        });
    }
};
let girl = new Girl();
function cry(who){
    console.log(who+"大哭");
}
function eat(who){
    console.log(who+"吃");
}
function shopping(who){
    console.log(who+"购物");
}
//订阅,绑定
girl.on("失恋了",cry);
girl.on("失恋了",eat);
girl.on("失恋了",shopping);
girl.removeListener("失恋了",shopping);
//发布，触发
girl.emit("失恋了","张红爽");