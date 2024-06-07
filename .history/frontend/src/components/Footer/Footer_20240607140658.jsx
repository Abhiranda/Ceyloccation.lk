import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt=''/>
                <p>Delivering Deliciousness: Taste the finest flavors, delivered right to your door. For assistance, reach out to us directly or connect on Social Media for updates and exclusive offers.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 76023644</li>
                    <li>E-Taste@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © E-Taste.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
