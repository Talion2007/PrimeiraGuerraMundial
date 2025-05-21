import React from 'react';
import Navbar from "../components/nav"
import '../styles/header-footer.css';
import Logo from '../assets/logogruposem.png';
function Header(props) {
    return (
        <header>
            <img src={Logo} className='logot' />
           <h1>{props.titulo}</h1>
        <Navbar />
        </header>
    );
};




export default Header;