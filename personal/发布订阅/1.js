function Girl() {
    this._events = {};
}
Girl.prototype.on = function(eventName,callback){
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        this._events[eventName] = [callback];
    }
};
Girl.prototype.emit = function(){

};

let girl = new Girl();
girl.on("失恋了",eat);
girl.on("失恋了",cry);
girl.on("失恋了",shop);
function eat(){
    console.log("大吃");
}
function cry(){
    console.log("大哭");
}
function shop(){
    console.log("逛街");
}
