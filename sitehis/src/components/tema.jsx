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
  };

  if (temEscuro == true) {
    document.body.classList.add("dark-mode");
    document.body.classList.add("dark-nav");
    document.body.classList.add("dark-header");
    document.body.classList.add("dark-home");
    document.body.classList.add("dark-page");
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("dark-nav");
    document.body.classList.remove("dark-header");
    document.body.classList.remove("dark-home");
    document.body.classList.remove("dark-page");
    document.body.classList.remove("dark-mode");
  }

  return (
    <button onClick={alternarTema}>
      {temEscuro ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}

export default Tema;