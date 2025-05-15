import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'; 


function Navbar() {
  return (
    <nav>
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/guerra-do-contestado">Guerra do Contestado</Link></li>
        <li><Link to="/guerra-de-canudos">Guerra de Canudos</Link></li>
        <li><Link to="/primeira-guerra-mundial">Primeira Guerra Mundial</Link></li>
        <li><Link to="/revolucao-russa">Revolução Russa</Link></li>
        <li><Link to="/fascismo-italiano">Fascismo Italiano</Link></li>
        <li><Link to="/crise-de-1929">Crise de 1929</Link></li>
       
        <li><Link to="/pagina-9">Sobre</Link></li>
        <li><Link to="/curtidas">Curtidas</Link></li>
      
      </ul>
    </nav>
  );
}

export default Navbar;