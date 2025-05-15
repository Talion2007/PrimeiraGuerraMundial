import Footer from "../components/footer";
import Header from "../components/header";
import { useState } from "react";
import "../styles/page.css";


function Curtidas() {
  const artigoCanudos = localStorage.getItem("Artigo Canudos") || 0;
  const videoCanudos = localStorage.getItem("Video Canudos") || 0;
  const wikipediaCanudos = localStorage.getItem("Wikipedia Canudos") || 0;
  const mediaCanudos =
    ((parseInt(artigoCanudos) + parseInt(videoCanudos) + parseInt(wikipediaCanudos)) / 3).toFixed(2);

  const artigoContestado = localStorage.getItem("Artigo Contestado") || 0;
  const videoContestado = localStorage.getItem("Video Contestado") || 0;
  const wikipediaContestado = localStorage.getItem("Wikipedia Contestado") || 0;
  const mediaContestado =
    ((parseInt(artigoContestado) + parseInt(videoContestado) + parseInt(wikipediaContestado)) / 3).toFixed(2);

    const artigoPrimeiraGuerra = localStorage.getItem("Artigo Primeira Guerra") || 0;
    const videoPrimeiraGuerra = localStorage.getItem("Video Primeira Guerra") || 0
    const wikipediaPrimeiraGuerra = localStorage.getItem("Wikipedia Primeira Guerra") || 0;
    const mediaPrimeiraGuerra = ((parseInt(artigoPrimeiraGuerra) + parseInt(videoPrimeiraGuerra) + parseInt(wikipediaPrimeiraGuerra)) / 3).toFixed(2);

const medias = [
  { nome: "Canudos", nota: mediaCanudos },
  { nome: "Contestado", nota: mediaContestado },
  { nome: "Primeira Guerra", nota: mediaPrimeiraGuerra },
];

// Ordenar as notas em ordem decrescente
const mediaOrdenada = medias.sort((a, b) => b.nota - a.nota);

  return (
    <div className="liked">
      <Header />
      <h1>Curtidas</h1>
      <section className="bloco">
        <h2>Ranking das Notas: </h2>
          {mediaOrdenada.map((media, index) => (
            <div key={media.nome} className="ranking">
              <h2>{index + 1}° - {media.nome}</h2>
              <h3>Nota: {media.nota}</h3>
            </div>
          ))}
      </section>
      <Footer/>
    </div>
  );
}

export default Curtidas;