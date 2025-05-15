import { useState } from "react";
import "../styles/tema.css";

function Tema() {
  const [temEscuro, setTemEscuro] = useState(() => {
        const temaSalvo = localStorage.getItem("tema");
        return temaSalvo ? JSON.parse(temaSalvo) : false;
    });

  const alternarTema = () => {
    if (temEscuro == false) {
      setTemEscuro(true);
      localStorage.setItem("tema", true);
    }
    else {
      setTemEscuro(false);
      localStorage.setItem("tema", false);
    }

    
    document.body.classList.toggle("dark-mode", !temEscuro);
    document.body.classList.toggle("dark-nav", !temEscuro);
    document.body.classList.toggle("dark-header", !temEscuro);
    document.body.classList.toggle("dark-home", !temEscuro);
    document.body.classList.toggle("dark-page", !temEscuro);
  };

  return (
    <button onClick={alternarTema}>
      {temEscuro ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}

export default Tema;