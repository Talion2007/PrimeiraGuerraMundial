import Header from "../components/header";
import Footer from "../components/footer";
import Curtida from "../components/curtida";
import "../styles/page.css";
function FascismoItaliano() {
  return (
    <div>
      <Header />

      <h1 className="hero">Crise de 1929</h1>
      <section className="bloco">
        <section className="c1">
          <p className="t1">
            Antes mesmo da crise de 1929 acontecer, os Estados Unidos já eram
            considerados a maior economia do mundo. Mesmo antes da Primeira
            Guerra Mundial, o país já mostrava sinais claros de sua força
            econômica, e a guerra apenas reforçou ainda mais essa posição de
            destaque internacional. Durante a década de 1920, os Estados Unidos
            viveram um período de muito crescimento e entusiasmo econômico,
            conhecido como os “Loucos Anos Vinte” ou, em inglês, Roaring
            Twenties. Essa fase ficou marcada pelo aumento no consumo de bens e
            pela consolidação do estilo de vida americano, o chamado American
            way of life, onde o consumo passou a ser visto como parte essencial
            da vida das pessoas. A economia americana cresceu tanto que o país
            chegou a produzir 42% de todos os produtos fabricados no mundo. Além
            disso, tornou-se o maior credor internacional, emprestando grandes
            quantias a países europeus que estavam tentando se reconstruir após
            a Primeira Guerra Mundial. Também era o maior comprador de
            matérias-primas entre as principais nações comerciais do planeta,
            comprando 40% de tudo o que era vendido por elas. Esse período de
            crescimento refletia diretamente na população, que passou a consumir
            de forma exagerada. Carros, eletrodomésticos e outros bens se
            tornaram comuns nas casas das famílias americanas, e o consumo
            desenfreado se espalhava por todos os lados. Esse consumismo era
            possível, em boa parte, por causa da enorme oferta de crédito no
            país, que crescia sem qualquer controle ou regulação por parte do
            governo. O crédito também era fundamental para manter várias áreas
            da economia funcionando. O cenário era tão favorável que o país
            vivia praticamente em pleno emprego e com a indústria crescendo
            rapidamente. Entre os anos de 1923 e 1929, a taxa média de
            desemprego nos Estados Unidos era de apenas 4%. Nesse mesmo período,
            a produção de automóveis cresceu 33%, o número de indústrias
            aumentou cerca de 10% e as vendas do comércio cresceram cinco vezes.
            Com toda essa euforia, muitas pessoas passaram a investir com força
            no mercado financeiro, especialmente na bolsa de valores de Nova
            York. Isso fez com que os preços das ações disparassem, gerando uma
            onda de especulação. Apesar do cenário parecer próspero, essa
            aparente riqueza estava construída sobre uma base muito frágil. O
            crédito solto e a especulação exagerada criaram uma ilusão de
            crescimento que, na verdade, estava prestes a desmoronar. Durante
            essa década, as fábricas americanas aumentaram muito a produção, e
            os trabalhadores também ficaram mais eficientes. Porém, os salários
            não acompanharam esse crescimento. Com pouca gente ganhando o
            suficiente, o mercado não conseguia absorver todos os produtos que
            eram fabricados. Nem mesmo os consumidores americanos, nem os de
            outros países, conseguiam comprar tudo o que estava sendo produzido.
            Isso começou a abalar a confiança dos investidores, especialmente
            daqueles que tinham comprado ações esperando lucros rápidos. Foi
            então que, no dia 24 de outubro de 1929, milhares de pessoas
            decidiram vender suas ações ao mesmo tempo, no episódio que ficou
            conhecido como a Quinta-feira Negra. Mais de 12 milhões de ações
            foram colocadas à venda nesse dia, o que causou pânico geral. A
            crise continuou nos dias seguintes, e na segunda-feira, dia 28, mais
            33 milhões de ações foram vendidas. O valor das ações caiu
            drasticamente, bilhões de dólares desapareceram e a economia dos
            Estados Unidos entrou em colapso. Os efeitos dessa crise foram
            sentidos de forma imediata e se espalharam pelo país como um efeito
            dominó. O período mais grave da crise foi entre os anos de 1929 e
            1933. Só depois desse tempo é que a situação começou a melhorar, com
            o governo passando a intervir na economia por meio de um conjunto de
            medidas chamado de New Deal, ou "Novo Acordo". Durante essa fase
            crítica, o Produto Interno Bruto do país caiu pela metade. O
            desemprego disparou e atingiu 27% da população ativa, sendo que
            antes da crise estava em apenas 4%. As importações despencaram 70% e
            as exportações caíram pela metade. O volume de empréstimos feitos
            para outros países diminuiu em 90%. A produção industrial teve uma
            queda de pelo menos um terço, e a fabricação de automóveis caiu pela
            metade. Os salários médios pagos na indústria também caíram cerca de
            50%. Milhares de empresas e bancos faliram, e milhões de pessoas
            perderam tudo o que tinham de uma hora para outra.
            <Curtida id="Artigo Crise de 1929"/>
          </p>

          <aside className="ima">
            <img src="https://investidorsardinha.r7.com/wp-content/uploads/2020/08/crise-de-1929-a-grande-depressao-economica.jpg" />
            <img src="https://static.historiadomundo.com.br/2023/09/o-mais-alto-padrao-de-vida-do-mundo-diz-o-letreiro-contrastando-com-a-fila-de-espera-por-suprimentos-na-crise-de-1929.jpg" />
          </aside>
        </section>

        <section className="c2">
          <aside className="ima">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_5n-62ZB1zqsAgz0mW6a1woUwJC-QvWgZg&s" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXhI99S50xi8_7SelGhTMeRcV-jkCeenghg&s" />
          </aside>
          <p className="t1">
           <h2>Informações da API</h2>
            <Curtida id="Wikipedia Crise de 1929" />
          </p>
        </section>

        <article>
        <iframe
          src="https://www.youtube.com/embed/T7SVL_0jL1U?si=81hVG1MheO9EMfIr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <Curtida id="Video Crise de 1929" />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default FascismoItaliano;
