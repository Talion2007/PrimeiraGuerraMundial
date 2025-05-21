import React from 'react';
import Tema from './tema';
import Logo from '../assets/logogruposem.png';
import '../styles/header-footer.css';

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