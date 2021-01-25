import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import aReducer from './reducer/a.reducer.js'
//import bReducer from './reducer/b.reducer.js'

//合并reducers
// const allReducers = combineReducers({
//     aR:aReducer,
//     bR:bReducer
// })

//applyMiddleware(thunk)支持异步action
//export default createStore(allReducers,applyMiddleware(thunk));
export default createStore(aReducer,applyMiddleware(thunk));

//store.subscribe 检测store是否变化 参数为一个function

//store.dispatch  执行reducer方法  参数为封装的action