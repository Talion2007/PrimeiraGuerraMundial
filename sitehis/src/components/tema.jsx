import { useState } from "react";
import "../styles/tema.css";

function Tema(){
    const[temEscuro, setTemEscuro] = useState(false);


    const alternarTema = () => {
        setTemEscuro(!temEscuro);
        document.body.classList.toggle("dark-mode", !temEscuro);
    };

return(
    <button className="botaotema" onClick={alternarTema}>{temEscuro ? "Modo Claro" : "Modo Escuro"}</button>
);
}

export default Tema;

