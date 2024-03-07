import React from 'react';
import './Footer.css';
import logo from '../Assets/logo1.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <div><img src={logo} alt="" className='lg'/></div>
            <div>Shopper</div>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social">
            <div className="icon-container">Instagram</div>
            <div className="icon-container">Whatsapp</div>
            <div className="icon-container">Pinterest</div>
        </div>
        <div className="footer-copyrights">
            <hr />
            Copyright @ 2024 All Rights Reserved 
        </div>
    </div>
  );
}

export default Footer;