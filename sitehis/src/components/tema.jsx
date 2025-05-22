import { useState } from "react";
import "../styles/tema.css"; // Importa o arquivo CSS para estilização

// Componente funcional Tema
function Tema() {
  // Estado para controlar se o tema escuro está ativado
  const [temEscuro, setTemEscuro] = useState(() => {
    // Recupera o tema salvo no localStorage, se existir
    const temaSalvo = localStorage.getItem("tema");
    return temaSalvo ? JSON.parse(temaSalvo) : false; // Define o tema padrão como claro
  });

  // Função para alternar entre tema claro e escuro
  const alternarTema = () => {
    if (temEscuro == false) {
      setTemEscuro(true); // Ativa o tema escuro
      localStorage.setItem("tema", true); // Salva o estado no localStorage
    } else {
      setTemEscuro(false); // Ativa o tema claro
      localStorage.setItem("tema", false); // Salva o estado no localStorage
    }
  };

  // Aplica ou remove classes no corpo do documento com base no tema
  if (temEscuro == true) {
    document.body.classList.add("dark-mode");
    document.body.classList.add("dark-nav");
    document.body.classList.add("dark-header");
    document.body.classList.add("dark-home");
    document.body.classList.add("dark-page");
    document.body.classList.add("dark-rank");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.remove("dark-nav");
    document.body.classList.remove("dark-header");
    document.body.classList.remove("dark-home");
    document.body.classList.remove("dark-page");
    document.body.classList.remove("dark-rank");
  }

  // Renderiza o botão para alternar o tema
  return (
    <button onClick={alternarTema}>
      {temEscuro ? "Modo Claro" : "Modo Escuro"} {/* Texto do botão muda conforme o tema */}
    </button>
  );
}

export default Tema; // Exporta o componente para uso em outras partes do projeto