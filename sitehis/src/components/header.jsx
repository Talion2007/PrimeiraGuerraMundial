import React from 'react';
import Navbar from "../components/nav"
import '../styles/header.css';
import Logo from '../assets/logogruposem.png';
function Header() {
    return (
        <header>
            <img src={Logo} className='logot' />
           <h1>A História do Século XX</h1>
        <Navbar />
        </header>
    );
};




export default Header;