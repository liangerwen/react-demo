import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

export default function MyRouter() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/404">404</Route>
      <Redirect from="/*" to="/404" />
    </Switch>
  );
}
