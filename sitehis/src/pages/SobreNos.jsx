import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

import "../styles/page.css";
import imageG from "../assets/grupo.jpg";

function SobreNos() {
  return (
    <>
      <Header titulo="Sobre Nós"/>

      <img src={imageG} className="imageg" />
      <section className="bloco">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut autem vel
          eveniet consequuntur maiores recusandae dolorem laboriosam perspiciatis
          facere. Eveniet voluptate temporibus ad sunt ducimus in consequuntur
          totam quo corporis?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Cum incidunt praesentium omnis, unde similique, maiores eveniet
          mollitia earum perferendis tempore nulla in eum sunt expedita iure
          numquam architecto officiis itaque. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dicta eligendi, natus, rerum molestiae,
          quod eos maxime eum cumque libero necessitatibus sequi! Libero iure ut
          facilis minus neque harum sit consequuntur. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Magni repellat quia blanditiis eos maxime
          accusamus asperiores magnam! Praesentium asperiores aperiam quas id ab
          incidunt perspiciatis? Blanditiis fugit minus a quis? Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Et nulla eveniet inventore,
          labore fugiat iure eius doloribus repellat omnis obcaecati eum mollitia.
          Natus reiciendis suscipit voluptatum quas rerum pariatur necessitatibus.
        </p>
      
      </section>
      <Footer/>
    </>
  );
}

export default SobreNos;