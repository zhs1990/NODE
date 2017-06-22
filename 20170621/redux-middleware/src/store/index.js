import {createStore,applyMiddleware} from "redux";
//thunk函数 是一会延时执行的函数
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer";
export default applyMiddleware(thunk,logger)(createStore)(reducer);