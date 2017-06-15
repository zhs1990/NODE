let createStore = (reducer)=>{
    let state; //先定义一个默认值
    let listeners = []; //存放所有的监听函数
    let getState = ()=> state;
    //订阅状态变化事件，当状态发生变化的时候会调用listener函数
    let subscribe = listener =>{
        listeners.push(listener);
        //调用subscribe的返回值，会取消掉此函数的监听
        return ()=>{
            listeners = listeners.filter(l=>l!=listener);//调用此函数表示取消订阅
        }
    };
    let dispatch = (action)=>{
        //把老的状态和action传入reducer，会返回新的状态
        state = reducer(state,action);
        //拿到监听函数都执行一遍
        listeners.forEach(l=>l());
    };
    dispatch();
    return {
        getState,  //获取最新的状态
        subscribe, //订阅状态变化事件
        dispatch //派发action  改变状态 使监听函数执行
    }
};
//把多个reducer合并成一个reducer
let combineReducers = (reducers)=>{
    return (state={},action={})=>{
        let result = {};
        for(var key in reducers){
            result[key] = reducers[key](state[key],action);
        }
        return result;
    }
};
export {createStore,combineReducers}