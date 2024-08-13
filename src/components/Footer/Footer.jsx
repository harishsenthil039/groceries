import React from 'react'
import './Footer.css'
import { assets } from '../../assets/Assets'
const Footer = () => {
  return (
   
    <div className='footer' id='footer'>
        
        <div className='footer-content'>
            <div className='footer-content-left'>
            <img src={assets.logo} alt=''/>
            <p>  The business of selling groceries online. It concentrates on customer value, the convenience of shopping, and also potentially quick and easy delivery. Customers who are shopping online for groceries have come to expect these things of grocery retailers. </p>
            <div className='footer-social-icons'>
            <img src={assets.facebook} alt=''/>
            <img src={assets.X} alt=''/>
            <img src={assets.linkdein} alt=''/>
            </div>

            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 94888830334</li>
                    <li>contact@grocery.com</li>
                </ul>
            </div>
            </div>
            <hr />  
            <p className='copyright'>Copyright 2024 © Grocery.com - All Right Reserved</p>
    </div>
    
  )
}

export default Footer
