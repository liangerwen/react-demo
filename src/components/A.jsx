import React from "react";
import {withRouter} from "react-router-dom";
import { connect } from "react-redux";
import { createIncrement,createDecrement } from "../redux/action/a.action";
function A(props) {
  console.log(props)
  return (
    <>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <h1>AAAAAAAAAAAA</h1>
      <button onClick={()=>{props.send("我是子组件传给父组件得值")}}>6666666</button>
      <button onClick={()=>{props.increment(1);}}>+</button>
      <button onClick={()=>{props.decrement(1);}}>-</button>
    </>
  );
}

// function mapStateToProps(state){
//   return {
//     count:state
//   }
// }

// function mapDispatchToProps(dispatch){
//   return{
//     increment:data => dispatch(createIncrement(data)),
//     decrement:data => dispatch(createDecrement(data))
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(withRouter(A))

//简写
export default connect(
  state=>({
    count:state
  }),{
    increment:createIncrement,
    decrement:createDecrement
  })(withRouter(A))
