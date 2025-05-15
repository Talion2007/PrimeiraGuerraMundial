import Header from "../components/header";
import Footer from "../components/footer";
import Curtida from "../components/curtida";

import "../styles/page.css";
function RevolucaoRussa() {
  return (
    <>
      <Header titulo="Revolução Russa"/>

      <section className="bloco">
        <section className="c1">
      <p className="t1">
            A Revolução Russa foi um dos acontecimentos mais marcantes e
            transformadores do século XX. Ela ocorreu no ano de 1917 e resultou
            na queda da monarquia czarista que governava a Rússia há séculos,
            dando início à formação do primeiro Estado socialista da história, a
            União Soviética. Essa revolução não apenas mudou profundamente a
            realidade da Rússia, mas também teve impactos significativos no
            cenário político, econômico e social mundial. Na época, a população
            russa enfrentava condições de vida extremamente difíceis. A maioria
            vivia no campo, em situação de extrema pobreza, com escassez de
            alimentos, falta de terras para cultivar e uma desigualdade social
            enorme entre a elite e o povo. O país era governado pelo czar
            Nicolau II, que concentrava todo o poder nas mãos da monarquia e
            mantinha um regime autoritário. Além disso, a Rússia estava
            envolvida na Primeira Guerra Mundial desde 1914, o que agravou ainda
            mais a situação. Milhões de soldados russos morriam nas frentes de
            batalha, enquanto o povo passava fome e sofria com a escassez de
            recursos. O descontentamento popular crescia a cada dia, criando um
            ambiente propício para a revolução. A Revolução Russa teve duas
            fases. A primeira aconteceu em fevereiro de 1917, quando uma série
            de protestos e greves em Petrogrado (atual São Petersburgo) levou à
            derrubada do czar Nicolau II. Com isso, o regime czarista chegou ao
            fim, e foi formado um governo provisório, composto por
            representantes da burguesia e moderados. No entanto, esse novo
            governo não conseguiu atender às principais demandas do povo, como o
            fim da guerra, a distribuição de terras e melhores condições de

            vida. A insatisfação popular continuava alta. A segunda fase da
            revolução ocorreu em outubro do mesmo ano e foi liderada por
            Vladimir Lênin e pelo Partido Bolchevique. Os bolcheviques
            organizaram uma insurreição armada e tomaram o poder, prometendo
            atender às reivindicações populares com o lema: “Paz, terra e pão”.
            Eles retiraram a Rússia da Primeira Guerra Mundial, começaram a
            distribuir terras aos camponeses e iniciaram a construção de um novo
            tipo de governo baseado no socialismo. Após a vitória dos
            bolcheviques, teve início uma guerra civil entre os apoiadores do
            novo regime comunista, chamados de “vermelhos”, e os opositores,
            conhecidos como “brancos”, que queriam restaurar o antigo regime. Os
            bolcheviques saíram vitoriosos e consolidaram seu poder. Em 1922,
            foi oficialmente criada a União das Repúblicas Socialistas
            Soviéticas (URSS), formada por várias repúblicas sob a liderança da
            Rússia. Esse novo Estado adotou uma economia planificada, estatizou
            indústrias e bancos, e buscou eliminar a propriedade privada dos
            meios de produção. A Revolução Russa teve um profundo impacto no
            mundo inteiro. Ela inspirou movimentos comunistas e socialistas em
            diversos países, influenciou guerras, revoluções e políticas durante
            todo o século XX, especialmente durante a Guerra Fria, quando a
            União Soviética se tornou uma das duas superpotências globais, ao
            lado dos Estados Unidos. Assim, a Revolução Russa não foi apenas um
            evento local, mas um divisor de águas na história mundial, que
            alterou radicalmente a política, a economia e as relações
            internacionais nos anos que se seguiram.
            <Curtida id="Artigo Revolução Russa"/>
          </p>

          <aside className="ima">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Armed_soldiers_carry_a_banner_reading_%27Communism%27%2C_Nikolskaya_street%2C_Moscow%2C_October_1917.jpg" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0cYGq9PdXy-2AsoXNivc2Gl6Cza5AUzMnA&s" />
          </aside>
        </section>

        <section className="c2">
          <aside className="ima">
            <img src="https://ogimg.infoglobo.com.br/in/21975364-e2c-6fe/FT1086A/72528758.jpg" />
            <img src="https://assets.brasildefato.com.br/2024/09/image_processing20200201-29235-1nfnxod.jpg" />
          </aside>
          <p className="t1">
           <h2>Informações da API</h2>
            <Curtida id="Wikipedia Revolução Russa"/>
          </p>
        </section>

<article>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/r_1xj0Pyi-8?si=Ff8GTS9Yq96SJK11"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <Curtida id="Video Revolução Russa"/>
      </article>
      </section>
      <Footer />
    </>
  );
}

export default RevolucaoRussa;