import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
        <div className='footer'>

            <p>© 2023 Fajle Rabby. All rights reserved | Privacy Policy | <span><Link to='/contact'>Contact Us</Link></span></p>

        </div>
    </>
  )
}

export default Footer;