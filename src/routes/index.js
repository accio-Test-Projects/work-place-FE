import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "../components/LandingPage";

function Navs() {
  return (
    <Router>
      <Switch>
        <Route path="/">
         <LandingPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Navs;
