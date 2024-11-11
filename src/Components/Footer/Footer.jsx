import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>Our Mission and Vision</h2>
                <p>
                    <p>
                        Our mission is to provide delicious and convenient fast food options to our customers, while maintaining the highest standards of quality and customer service.
                    </p>
                    <br />
                    
                    <p>
                        Our vision is to become the go-to destination for fast food, known for our diverse menu, innovative flavors, and commitment to using fresh, locally sourced ingredients. 
                    </p>
                </p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin}  alt="" />
                    <img src={assets.twitter} alt="" />
                    <img src={assets.instagram} alt="" />
                    <img src={assets.youtube} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Fast Food</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    </ul>
            </div>
            <div className="footer-content-right">
                <h2>Contact us</h2>
                <ul>
                    <li>+250 788-432-134</li>
                    <li>fastfood@gmail.com</li>
                </ul>
            </div>
            
        </div>
      <hr />
      <p>&copy; Copyright 2024.All Rights reserved</p>
    </div>
  )
}

export default Footer
