import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/page.css";
import imageG from "../assets/grupo.jpg";

function SobreNos() {
  return (
    <>
      <Header titulo="Sobre Nós" />

      <img src={imageG} className="imageg" />
      <section className="bloco">
        <p>
          Somos um grupo de cinco cabeças (e muitas ideias), cada um com seu
          jeito único, mas juntos formamos um time que se completa — às vezes no
          caos, mas sempre com criatividade e bom humor. Felipe é o nosso líder
          — o cérebro e o palhaço da equipe. Ele segura as rédeas do grupo com
          uma mão e faz piada com a outra. Lidera com leveza e sabe deixar tudo
          mais divertido. Vitor, o nosso rei dos códigos, transforma café e
          teclas em magia digital. Se existe uma solução, ele já codou. Se não
          existe, ele inventa. Murilo Correia, o vice-líder e verdadeiro rei dos
          fones — cada semana aparece com um modelo novo. Dizem que ele tem mais
          fone do que roupa no armário. Mas quando fala, todo mundo ouve. Murilo
          Besson é o cara dos carros. Se não está falando de motor, está
          pensando em acelerar. É o piloto das ideias e o mecânico das opiniões
          — sempre com rodas na cabeça. E por fim, temos o William, o membro
          mais… trabalhoso. Aquele que sempre nos dá motivos pra rir, se
          estressar e contar histórias depois. Mas, no fundo, a gente não
          conseguiria sem ele (só não conta pra ele que a gente disse isso).
          Juntos, somos um grupo diferente, criativo e cheio de personalidade.
          Se você nos vê rindo, discutindo ou criando algo incrível — é só mais
          um dia normal com a gente.
        </p>
      </section>
      <br></br>
      <article>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dZx7uNhlaXU?si=h53z_dlcssstRSN7"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </article>
      <Footer />
    </>
  );
}

export default SobreNos;
