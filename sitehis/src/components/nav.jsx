import { Link } from "react-router-dom"; // Importa o componente Link para navegação
import { useEffect, useState } from "react"; // Importa hooks do React
import "../styles/nav.css"; // Importa o arquivo CSS para estilização

// Componente funcional NavBar
function NavBar() {
  // Estado para controlar se o menu deve ser exibido no formato de "hambúrguer"
  const [navbar, setNavbar] = useState(false);
  // Estado para armazenar a largura da tela
  const [widthSize, setWidthSize] = useState(window.screen.width);

  // useEffect para monitorar mudanças na largura da tela
  useEffect(() => {
    const Interval = setInterval(() => {
      setWidthSize(window.screen.width); // Atualiza a largura da tela
      if (widthSize < 480) {
        setNavbar(true); // Ativa o menu "hambúrguer" para telas menores que 480px
      } else {
        setNavbar(false); // Desativa o menu "hambúrguer" para telas maiores
      }
    });

    return () => clearInterval(Interval); // Limpa o intervalo ao desmontar o componente
  }, [widthSize]);

  // Renderização do componente
  return (
    <nav>
      {navbar ? (
        // Menu no formato "hambúrguer" para telas pequenas
        <>
          <input type="checkbox" id="hamburger-trigger" />
          <label htmlFor="hamburger-trigger">
            {/* Ícone do menu aberto */}
            <svg
              className="svg"
              id="on"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>

            {/* Ícone do menu fechado */}
            <svg
              id="off"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          {/* Lista de links do menu */}
          <ul id="options">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/guerra-do-contestado">Guerra do Contestado</Link>
            </li>
            <li>
              <Link to="/guerra-de-canudos">Guerra de Canudos</Link>
            </li>
            <li>
              <Link to="/primeira-guerra-mundial">Primeira Guerra Mundial</Link>
            </li>
            <li>
              <Link to="/revolucao-russa">Revolução Russa</Link>
            </li>
            <li>
              <Link to="/fascismo-italiano">Fascismo Italiano</Link>
            </li>
            <li>
              <Link to="/crise-de-1929">Crise de 1929</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre</Link>
            </li>
            <li>
              <Link to="/curtidas">Curtidas</Link>
            </li>
          </ul>
        </>
      ) : (
        // Menu padrão para telas maiores
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/guerra-do-contestado">Guerra do Contestado</Link>
          </li>
          <li>
            <Link to="/guerra-de-canudos">Guerra de Canudos</Link>
          </li>
          <li>
            <Link to="/primeira-guerra-mundial">Primeira Guerra Mundial</Link>
          </li>
          <li>
            <Link to="/revolucao-russa">Revolução Russa</Link>
          </li>
          <li>
            <Link to="/fascismo-italiano">Fascismo Italiano</Link>
          </li>
          <li>
            <Link to="/crise-de-1929">Crise de 1929</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre</Link>
          </li>
          <li>
            <Link to="/curtidas">Curtidas</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar; // Exporta o componente para uso em outras partes do projeto