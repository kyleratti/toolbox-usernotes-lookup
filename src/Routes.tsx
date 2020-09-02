import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginCallbackPage from "./pages/LoginCallbackPage";
import LoginPage from "./pages/LoginPage";

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />

    <Route path="/login" exact component={LoginPage} />
    <Route path="/login/callback" exact component={LoginCallbackPage} />

    <Redirect to="/" />
  </Switch>
);
export default Routes;
