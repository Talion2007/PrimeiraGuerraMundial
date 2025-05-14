import React from 'react';
import '../styles/header.css'
import Logo from '../assets/logogruposem.png';
function Footer() {
    return (
        <footer>
            <p>Alfa One Development - 2025. All rights reserved.</p>
            <img src={Logo} alt="Logo Alfa One Development." className='logo' />
        </footer>
    );
};

export default Footer;