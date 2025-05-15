import React from 'react';
import Navbar from "../components/nav"
import '../styles/header.css';
import Logo from '../assets/logogruposem.png';
import Tema from './tema';
function Header() {
    return (
        <header>
            <img src={Logo} className='logot' />
           <h1>A História do Século XX</h1>
         <Tema/>
        <Navbar />
        </header>
    );
};




export default Header;