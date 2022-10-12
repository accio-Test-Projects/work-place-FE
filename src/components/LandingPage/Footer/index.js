
import React from 'react';
import "./index.css";
import FooterLogo from "../../../assests/FooterLogo.png";
function Footer() {
  return (
    <>
        <div className='flex-container'>
            <div className='flex-item'>Never Want to Miss
            Any <span style={{color:"#4540DB"}}> Job News?</span>
           
            </div>
            <div className='flex-item'>
                    <form>
                        <input type="text" placeholder='Enter your email...'/>
                        <button>Subscribe</button>

                    </form>
            </div>
        </div>
        <div className='footer-container'>
            <div className='footer-item'>
                <img src={FooterLogo} alt="footer logo" style={{ maxWidth: "150px", width: "100%" }}/>
            </div>
            <div className='footer-item'>
                About
            </div>
            <div className='footer-item'>
                Jobs
            </div>
            <div className='footer-item'>
                Contact Us
            </div>
            <div className='footer-item'>
                Terms
            </div>
            <div className='footer-item'>
                Privacy Policy
            </div>
        </div>
        <div className='bottom-footer-container'>
        @staffingSolutions All right reserved.
        </div>

    </>
  )
}

export default Footer