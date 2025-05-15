import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import "../styles/page.css";

function Curtidas() {
  const avaliacao11 = localStorage.getItem("Curtida11") || 0;
  const avaliacao12 = localStorage.getItem("Curtida12") || 0;
  const avaliacao13 = localStorage.getItem("Curtida13") || 0;
  
  const avaliacao21 = localStorage.getItem("Curtida21") || 0;
  const avaliacao22 = localStorage.getItem("Curtida22") || 0;
  const avaliacao23 = localStorage.getItem("Curtida23") || 0;

  const mediaCanudos = (avaliacao11 + avaliacao12 + avaliacao13) / 3;
  const mediaContestado = (avaliacao21 + avaliacao22 + avaliacao23) / 3;

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