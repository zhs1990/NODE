let compose = (...fns)=>{
    return function (n) {
        return fns.reduceRight((val,fn)=>{
            return fn(val);
        },n);
    }
};
export default function (...wares) {
    //ware就是中间件
    //createStore就是原生的创建仓库的方法
    return function (createStore) {
        return function (reducer) {
            let store = createStore(reducer);
            let dispatch = store.dispatch;
            let wareApi = {
                getState:store.getState,
                dispatch:(action)=>dispatch(action)
            };
            wares.map(ware=>ware(wareApi));
            dispatch = compose(...wares)(store.dispatch);
            return {...store,dispatch}
        }
    }
}
