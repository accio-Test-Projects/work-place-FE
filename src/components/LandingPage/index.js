import React from "react";
import Navbar from "./NavBar";
import Section2 from "./Section2/Section2";
import Footer from "./Footer/Footer";
function LandingPage() {
  return (
    <div>
      <div>
        <Navbar/>
        <div>Get The Right Job You Deserve</div>
        <input />
      </div>
      <Section2/>
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
      
        <Footer/>
    
    </div>
  );
}

export default LandingPage;
