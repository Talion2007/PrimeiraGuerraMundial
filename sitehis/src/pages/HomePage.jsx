import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Cards from "../components/cards";
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
          <h2>História do Século XX</h2>
          <p>
            Se você curte história e quer aprender de um jeito simples, direto e
            sem enrolação, chegou ao lugar certo! Este site faz parte de um
            projeto integrado entre o SESI e o SENAI, pensado para oferecer a
            você, estudante dessas instituições, conteúdos históricos de forma
            leve, acessível e conectada com o que você aprende em sala de aula.
            Aqui, o conteúdo é organizado para facilitar o seu aprendizado, com
            explicações claras e exemplos que ajudam a conectar os temas com o
            seu dia a dia. Dá pra acessar tudo de forma rápida, pelo celular ou
            computador, sem complicação. Você vai encontrar páginas sobre
            eventos que marcaram o mundo, como a Primeira Guerra Mundial, que
            explica como aquele conflito gigantesco começou e por que ainda
            impacta o mundo hoje. Também tem a Guerra de Canudos, com a história
            de Antônio Conselheiro e a resistência no sertão baiano, e a Guerra
            do Contestado, que aconteceu no sul do Brasil e misturou disputa por
            terras, fé e política. Além disso, tem conteúdos sobre o Fascismo
            Italiano, mostrando como Mussolini chegou ao poder, e sobre a
            Revolução Russa, que mudou totalmente o sistema político daquele
            país. E claro, não podia faltar a Crise de 1929, quando a Bolsa de
            Nova York quebrou e gerou uma crise econômica global. Ah, e ainda
            tem a Página de Curtidas, onde dá pra ver os conteúdos que mais
            bombam entre os alunos, pra você ficar por dentro do que a galera tá
            acessando.
          </p>
        </article>
        <br/>
        <Cards />
      </section>
      <Footer />
    </>
  );
}

export default Home;
