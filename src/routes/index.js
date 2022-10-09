import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../Components/LandingPage";

function Navs() {
  return (
    <Router>
      <Routes>
        <Route path="/">
         <LandingPage/>
        </Route>
      </Routes>
    </Router>
  );
}

export default Navs;
