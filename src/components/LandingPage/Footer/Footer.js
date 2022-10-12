import React from 'react';
import './Footer.css';
import footerlogo from "../../../assets/footerlogo.jpg";

function Footer(props) {
    return (
        <div className='footer-container'>
            <div className='upper'>
                <div className='upper-text'>
                    <p>Never want to miss any jobs?</p>

                </div>
                <div className='upper-input'>
                    <div className='input-area'>
                         <form>
                            <input className="inp" type='text' placeholder='Enter Your Email' />
                            <button className='sub-btn' type='submit'>Subscribe</button>
                        </form>

                    </div>

                </div>

            </div>
            <div className='mid'>
                <div className='footer-logo'>
                    <img
                      src={footerlogo}
                        alt="logo"
                        // style={{ maxWidth: "100px", width: "100%" }}
                    />

                </div>
                <div className='footer-contents'>
                    <div className='row-1'>
                        <p className='headtitle'>About</p>
                    </div>
                    <div className='row'>
                        <p className='headtitle'>Jobs</p>
                    </div>
                    <div className='row'>
                        <p className='headtitle'>Contact us</p>
                    </div>
                    <div className='row'>
                        <p className='headtitle'>Terms</p>
                    </div>
                    <div className='row'>
                        <p className='headtitle'>Privacy policy</p>
                    </div>

                </div>

            </div>
            <div className='lower'>
                <p>@staffingSolutions  All rights reserved.</p>

            </div>
            
        </div>
    );
}

export default Footer;