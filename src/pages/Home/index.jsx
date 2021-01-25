import { Switch, Route, Link, Redirect } from "react-router-dom";
import React, { useState ,useEffect} from "react";
import store from "../../redux";
import A from "../../components/A";
import B from "../../components/B";
import "./index.less";
export default function Home() {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    store.subscribe(()=>{
      setCount(store.getState())
    })
  })
  return (
    <div id="home">
      <Link to="/home/me">me</Link>
      <br></br>
      <Link to="/home/you">you</Link>
      <p>{count}</p>
      <h1>{count}</h1>
      <hr></hr>
      <div>
        <Switch>
          <Route path="/home/me">
            {/* 父子组件传值 */}
            <A msg="我是父组件传给子组件的值" send={(childData)=>{setCount(childData)}} ></A>
          </Route>
          <Route path="/home/you" component={B} />
          <Redirect from="/home/*" to="/404" />
        </Switch>
      </div>
    </div>
  );
}
