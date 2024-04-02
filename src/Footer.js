import React, { useState } from 'react';
import Logo from './images/Logo.svg';
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer() {
    let copyright = String.fromCodePoint(0x00A9);
    return (
        <footer >
            <ul className='FooterList'>
            <li>
            <img src={Logo} alt="LOGO" />
              <div>{copyright} 2024 littlelemon.com All rights reserved.</div>  
                </li>
                <li>
                    <h2>Contact us</h2>
                    <p>180,Main street,St. Joseph</p>
                    <p>+99-9098877665</p>
                    <p>support@littlelemon.com</p>
                </li>
                <li className='SocialMedia'>
                  <div>  <FaFacebook /></div>
                  <div> <FaTwitter /></div>
                  <div> <FaInstagramSquare /></div>

                </li>
            </ul>
        </footer>
    )
}
export default Footer;