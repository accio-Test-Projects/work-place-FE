import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Signup from "../components/Signup";
import history from "./history";
function Navs() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/signIn/candidate">
          <Signup type={"candidate"} />
        </Route>
        <Route path="/signIn/client">
          <Signup type={"client"} />
        </Route>
        <Route path="/onboarding/client">
          <h1>client</h1>
        </Route>
        <Route path="/onboarding/candidate">
          <h1>candidate</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navs;
