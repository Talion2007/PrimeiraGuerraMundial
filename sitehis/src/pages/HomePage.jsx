import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/home.css";

function Home() {
  const [carrousel, setCarrousel] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrousel((carrousel) => carrousel + 1);
      if (carrousel >= 5) {
        setCarrousel(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Header titulo="História do Século XX" />

      <section className="bloco">
        {carrousel == 0 ? (
          <img
            src="https://ogimg.infoglobo.com.br/in/23223989-970-9a5/FT1500A/652/41704050_1602.1979ARQUIVOINTER1-GUERRA-MUNDIAL-1.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        {carrousel == 1 ? (
          <img
            src="https://investidorsardinha.r7.com/wp-content/uploads/2020/08/crise-de-1929-a-grande-depressao-economica.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        {carrousel == 2 ? (
          <img
            src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/benito-mussolini-ao-lado-hitler-foi-grande-lider-fascismo-italiano-movimento-politico-surgido-em-1919-5bc6344f74913.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        {carrousel == 3 ? (
          <img
            src="https://mst.org.br/wp-content/uploads/2019/11/18230701228_2e0843ed8e_b-2.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        {carrousel == 4 ? (
          <img
            src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/02/guerra-dos-canudos.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        {carrousel == 5 ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Armed_soldiers_carry_a_banner_reading_%27Communism%27%2C_Nikolskaya_street%2C_Moscow%2C_October_1917.jpg"
            alt="carrouselFront"
            className="ImagemCarrocel"
          />
        ) : (
          ""
        )}
        <article className="texto">
          <h1>História do Século XX</h1>
          <p>O século XX foi um caldeirão de eventos que moldaram profundamente a sociedade global. Desde as trincheiras da Primeira Guerra Mundial e a ascensão da Revolução Russa, que transformaram a geopolítica, até os dramas internos do Brasil, como as Guerras de Canudos e do Contestado, que expuseram as feridas sociais do país. A devastadora Crise de 1929 abalou economias mundiais, criando um vácuo que seria preenchido pela ascensão de ideologias extremistas como o Fascismo. Este período turbulento não apenas redefiniu fronteiras e sistemas políticos, mas também lançou as bases para os desafios e as inovações que viriam nas décadas seguintes.</p>
        </article>
      </section>
      <Footer />
    </>
  );
}

export default Home;
