import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Section2 from "./Section2/Section2";
import BannerImage from './Section4'
import Headers from "./Headers";
function LandingPage() {
    return (
        <div>
            <div>
                <NavBar />
                <Headers />
            </div>

            <div>
            <Section2/>
            </div>

            <div>
                <h1>Featured Job Circulars</h1>
                <p>cards</p><p>cards</p><p>cards</p><p>cards</p>
            </div>

            <div>
                <button>Find More Jobs</button>
            </div>

            <div><BannerImage /></div>

            <div>Never Want to Miss Any Job News?</div>
      <Footer />
    </div>
  );
}

export default LandingPage;
