import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import "../styles/page.css";

function Curtidas() {
  const [avaliacao11 , setAvaliacao11] = useState(() => {
    const curtidasalva = localStorage.getItem("Curtida1");
    return curtidasalva ? JSON.parse(curtidasalva) : 0;
  });
  const [avaliacao12 , setAvaliacao12] = useState(() => {
    const curtidasalva = localStorage.getItem("Curtida2");
    return curtidasalva ? JSON.parse(curtidasalva) : 0;
  });

  const Media = (avaliacao11 + avaliacao12) / 2;

  return (
    <div>
      <Header />
      <h1>Curtidas</h1>
      <section className="bloco">
        <p>Nota 1: {avaliacao11} </p>
        <p>Nota 2: {avaliacao12} </p>
        <p>Média: {Media} </p>
       
      </section>
      <Footer/>
    </div>
  );
}

export default Curtidas;