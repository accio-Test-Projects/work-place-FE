import React from 'react'
import NavBar from './NavBar'
import Section2 from "./Section2/Section2";
import BannerImage from './Section4'
function LandingPage() {
    return (
        <div>
            <div>
                <NavBar />
                <div>Get The Right Job You Deserve</div>
                <input />
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

            <footer>Footer</footer>

        </div>
    )
}

export default LandingPage