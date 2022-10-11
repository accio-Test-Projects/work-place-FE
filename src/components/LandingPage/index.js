import React from "react";
import Navbar from "./NavBar";
import Headers from "./Headers"
function LandingPage() {
  return (
    <div>
      <div>
        <Navbar/>
        <Headers />
      </div>
      <div>
        <h1>One Platform Many Solutions</h1>
        <p>cards</p>
        <p>cards</p>
        <p>cards</p>
        <p>cards</p>
      </div>
      <div>
        <h1>Featured Job Circulars</h1>
        <p>cards</p> <p>cards</p> <p>cards</p> <p>cards</p>
      </div>
      <div>
        <button>Find More Jobs</button>
      </div>
      <div>Banner img</div>
      <div>Never Want to Miss Any Job News?</div>
      <footer>footer</footer>
    </div>
  );
}

export default LandingPage;
