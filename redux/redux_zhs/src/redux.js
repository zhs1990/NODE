let createStore = (reducer)=>{
    let state;
    let listeners = [];
    let getState = ()=>state;
    let subscribe = (listener)=>{
        listeners.push(listener);
        return ()=>listeners.filter(l=>l!=listener);
    };
    let dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach(l=>l());
    };
    return {
        getState,
        subscribe,
        dispatch
    }
};
let combineReducers = ()=>{
    return (state,action)=>{
        let result = {};
    }
};
export {createStore};