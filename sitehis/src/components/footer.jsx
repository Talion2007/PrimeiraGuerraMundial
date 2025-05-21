import React from 'react';
import '../styles/header.css'
import Logo from '../assets/logogruposem.png';
import Tema from './tema';
function Footer() {
    return (
        <footer>
            <div className='FooterBox'>
            <img src={Logo} alt="Logo Alfa One Development." className='logo' />
            <p>Alfa One Development - 2025. All rights reserved.</p>
            </div>
            <Tema/>
        </footer>
    );
};

export default Footer;