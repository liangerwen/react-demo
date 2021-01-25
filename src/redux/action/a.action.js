import { increment, decrement } from "../variable";

export function createIncrement(data) {
  return {
    type: increment,
    data,
  };
}

export function createDecrement(data) {
  return {
    type: decrement,
    data,
  };
}
//异步的action,类似vuex的action
export function asyncAction(data) {
  return function(dispatch) {
    setTimeout(()=>{
      dispatch(createDecrement(data))
    },1000)
  }
}
