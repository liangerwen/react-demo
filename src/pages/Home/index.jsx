import { Switch, Route, Link } from "react-router-dom";
import "./index.css"
export default function Home() {
  return (
    <div id="home">
      <Link to="/home/me">me</Link>
      <br></br>
      <Link to="/home/you">you</Link>
      <Switch>
        <Route path="me">AAAAAAAAAAAAA</Route>
        <Route path="you">BBBBBBBBBBBBBB</Route>
      </Switch>
    </div>
  );
}
