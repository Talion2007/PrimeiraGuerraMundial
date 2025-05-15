import Header from "../components/header";
import Footer from "../components/footer";
import Curtida from "../components/curtida";
import "../styles/page.css";
function FascismoItaliano() {
  return (
    <div>
      <Header />

      <h1 className="hero">Fascismo Italiano</h1>
      <section className="bloco">
        <section className="c1">
          <p className="t1">
            O fascismo na Itália foi um governo conservador e extremista que
            assumiu o poder nesse país, por meio de Benito Mussolini, em 1922,
            acabando, oficialmente, em 1943.
            <br /> <br />
            Baseado em um governo conservador, radical e de extrema-direita, o
            fascismo surgiu, em 1919, como uma organização paramilitar,
            transformando-se em partido em 1921. <br /> <br /> Isso tudo
            aconteceu na Itália, idealizado e realizado por Benito Mussolini,
            que se aproveitou do cenário de incerteza de seu país após a
            Primeira Guerra Mundial. Benito foi executado no final da Segunda
            Guerra Mundial. <br /> <br /> O movimento e Mussolini acreditavam em
            ideologias nacionalistas, autoritárias, desprezavam a democracia e
            viam na violência um instrumento legítimo para chegar aos objetivos.
            <br />
            <br />
            O partido se baseava muito em Roma, pelo fato de terem sido um
            império muito glorioso e conquistador. Eles faziam um resgate muito
            grande do passado romano, com o objetivo de transmitir a ideia da
            força do povo da Itália. Até mesmo o símbolo do partido veio da
            história de Roma, os feixes unidos eram um símbolo que transmitia a
            ideia de força por meio da união. Estes também foram responsáveis
            pelo nome do partido, “fascio” é a palavra cujo sentido se refere a
            esses feixes.
            <br />
            <br />
            As principais características se concentravam no culto a
            personalidade, crença num destino glorioso, obediência cega, anseio
            imperialista, nacionalismo extremo, militarização, desprezo pela
            democracia, anti socialismo, superioridade racial e centralização do
            poder no Estado. <br /> <br />
            Após a revolução russa, em 1917, o socialismo ganhou força na
            Itália.
            <strong>
              É curioso destacar que Benito Mussolini possuía ideias socialistas
              na sua juventude.
            </strong>
            O grande crescimento desse movimento se deve pela crise social,
            política e econômica em que se encontrava a Itália. Na época o país
            enfrentava sérias dificuldades econômicas após a Primeira Guerra
            Mundial, especialmente com o retorno de milhares de soldados que não
            encontraram empregos disponíveis para garantir sua sobrevivência.
            Isso aconteceu porque o setor industrial italiano entrou em declínio
            depois da guerra. <br /> <br /> Além disso, havia uma desigualdade
            social entre o norte do país, economicamente mais desenvolvido, e o
            sul, marcado pela pobreza. <br /> <br />
            Outro fator importante foi a insatisfação da população com o
            desfecho da guerra. Apesar de ter lutado ao lado dos vencedores, a
            Itália não recebeu os ganhos territoriais e imperialistas que
            esperava. <br /> <br />
            Esse sentimento de traição e frustração foi intenso, ainda mais
            considerando o alto custo humano que a nação pagou durante a guerra.{" "}
            <strong>
              A combinação da crise econômica com o ressentimento nacional criou
              um ambiente favorável para o surgimento de grupos paramilitares
              com ideologias nacionalistas e conservadoras.
            </strong>{" "}
            Esses grupos eram, em sua maioria, compostos por ex-combatentes que
            se uniram em busca de um novo rumo para o país.
 <Curtida id="Artigo Fascismo Italiano"/>
          </p>

          <aside className="ima">
            <img src="https://humanidades.com/wp-content/uploads/2023/03/3-Fascismo-italiano.jpg" />
            <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/benito-mussolini-ao-lado-hitler-foi-grande-lider-fascismo-italiano-movimento-politico-surgido-em-1919-5bc6344f74913.jpg" />
          </aside>
        </section>

        <section className="c2">
          <aside className="ima">
            <img src="https://www.politize.com.br/wp-content/uploads/2024/07/fascismo-entenda-o-conceito.jpg" />
            <img src="https://s1.static.brasilescola.uol.com.br/be/2022/09/1-mussolini.jpg" />
          </aside>
          <p className="t1">
            <h2>Informações da API</h2>
            <Curtida id="Wikipedia Fascismo Italiano" />
          </p>
        </section>

        <article>
        <iframe
       src="https://www.youtube.com/embed/2MMKqI9qzXU?si=mBorkdaINLNqCMu6"
       title="YouTube video player"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       referrerpolicy="strict-origin-when-cross-origin"
       allowfullscreen
       ></iframe>
                   <Curtida id="Video Fascismo Italiano"/>
       </article>
      </section>
      <Footer />
    </div>
  );
}

export default FascismoItaliano;
