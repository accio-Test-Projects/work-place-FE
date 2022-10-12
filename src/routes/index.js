import React, { Suspense } from "react";
import LandingPage from "../components/LandingPage";
import Signup from "../components/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Navs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/signIn/candidate"
            element={<Signup type={"candidate"} />}
          />
          <Route path="/signIn/client" element={<Signup type={"client"} />} />
          <Route
            path="/onboarding/client"
            element={() => {
              return <h1>client</h1>;
            }}
          />

          <Route
            path="/onboarding/candidate"
            element={() => {
              return <h1>candidate</h1>;
            }}
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default Navs;
