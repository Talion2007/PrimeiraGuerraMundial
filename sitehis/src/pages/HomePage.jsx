import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
import "../styles/page.css";
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
        <section className="container">
          <p className="texto">
          <h2>História do Século XX</h2>
            Se você curte história e quer aprender de um jeito simples, direto e
            sem enrolação, chegou ao lugar certo. Este site faz parte de um
            projeto integrado entre o SESI e o SENAI, criado especialmente para
            oferecer aos estudantes dessas instituições conteúdos históricos de
            forma leve, acessível e conectada com o que é aprendido em sala de
            aula. Tudo foi pensado para facilitar o seu aprendizado, com
            explicações claras, exemplos práticos e uma linguagem próxima da sua
            realidade. E para garantir uma experiência moderna, rápida e
            funcional, utilizamos tecnologias como React na construção da
            interface, APIs para integrar os conteúdos de forma dinâmica e
            atualizada, além de CSS para deixar tudo visualmente agradável,
            responsivo e adaptado a diferentes dispositivos, seja no celular ou
            no computador. No site, você encontra páginas sobre eventos que
            marcaram o mundo, como a Primeira Guerra Mundial, explicando como o
            conflito começou e por que seus efeitos ainda repercutem hoje.
            Também estão disponíveis conteúdos sobre a Guerra de Canudos, com a
            história de Antônio Conselheiro e a resistência no sertão baiano, e
            sobre a Guerra do Contestado, que ocorreu no sul do Brasil e
            envolveu disputas por terra, fé e política. Há ainda temas como o
            Fascismo Italiano, mostrando a ascensão de Mussolini ao poder, e a
            Revolução Russa, que transformou completamente o sistema político do
            país. E claro, não poderia faltar a Crise de 1929, quando o colapso
            da Bolsa de Nova York desencadeou uma crise econômica mundial. Para
            completar, criamos a Página de Curtidas, onde é possível acompanhar
            os conteúdos mais acessados pelos alunos e descobrir o que está
            fazendo sucesso entre a galera. Tudo isso reunido em um ambiente
            digital pensado para tornar o aprendizado de história mais
            interessante, intuitivo e conectado com a tecnologia.
          </p>
        </section>
        <br />
        <Cards />
      </section>
      <Footer />
    </>
  );
}

export default Home;
