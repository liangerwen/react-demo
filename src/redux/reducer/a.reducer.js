import {increment,decrement} from '../variable'

export default function reducer(state = 0, action) {
  const { type, data } = action;
  switch (type) {
    case increment:
      return state + data;
    case decrement:
      return state - data;
    default:
      return state;
  }
}
