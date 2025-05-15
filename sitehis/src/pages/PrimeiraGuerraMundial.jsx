import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/page.css";
function PrimeiraGuerraMundial() {
  return (
    <div>
      <Header />

      <h1>Primeira Guerra Mundial</h1>

      <section>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jACiIe8Ly5o?si=TwvuBLs_CtAsTtp0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </section>

      <section className="bloco">
        <article>
          <p>
            A Primeira Guerra Mundial, também conhecida como Grande Guerra, foi
            um dos conflitos mais devastadores da história da humanidade,
            ocorrendo entre os anos de 1914 e 1918. Envolvendo as principais
            potências globais da época, o conflito teve causas complexas e
            interligadas, como o nacionalismo exacerbado, o imperialismo, o
            militarismo e o sistema de alianças militares que dividia a Europa.
            O nacionalismo fazia com que diversos povos desejassem autonomia, ao
            mesmo tempo em que países como Alemanha, França e Reino Unido
            alimentavam uma visão de superioridade nacional. O imperialismo
            gerava disputas por colônias na África e na Ásia, o que aumentava as
            rivalidades entre as potências europeias. O militarismo levou esses
            países a uma corrida armamentista, acreditando que os conflitos
            poderiam ser resolvidos pela força. Por fim, o sistema de alianças
            criou dois grandes blocos militares: a Tríplice Entente (formada por
            França, Rússia e Reino Unido) e a Tríplice Aliança (formada por
            Alemanha, Império Austro-Húngaro e Itália), que mais tarde trocaria
            de lado. O estopim do conflito foi o assassinato do arquiduque
            Francisco Ferdinando, herdeiro do trono do Império Austro-Húngaro,
            ocorrido em 28 de junho de 1914 na cidade de Sarajevo. O autor do
            atentado foi Gavrilo Princip, um nacionalista sérvio ligado ao grupo
            Mão Negra. Esse evento levou o Império Austro-Húngaro a declarar
            guerra à Sérvia, e rapidamente as alianças se ativaram em cadeia,
            arrastando a Europa inteira para o conflito. A guerra se espalhou
            por diversas frentes, sendo a Frente Ocidental, entre a França e a
            Alemanha, uma das mais conhecidas e marcadas pela guerra de
            trincheiras. Milhões de soldados viveram por anos em trincheiras
            precárias, enfrentando frio, fome, doenças e bombardeios constantes.
            Já a Frente Oriental envolveu a Alemanha, o Império Austro-Húngaro e
            a Rússia, com maior movimentação de tropas, mas igualmente
            sangrenta. Outras frentes também surgiram nos Bálcãs, no Oriente
            Médio, na África e até em colônias asiáticas. A guerra contou com o
            uso inédito de novas tecnologias de combate, como metralhadoras,
            aviões, tanques, gás venenoso e submarinos, o que contribuiu para o
            alto número de mortos e feridos. Em 1917, os Estados Unidos entraram
            na guerra ao lado da Tríplice Entente, após ataques de submarinos
            alemães a navios civis e pela revelação do Telegrama Zimmermann, no
            qual a Alemanha tentava convencer o México a entrar em guerra contra
            os EUA. A entrada americana trouxe novo ânimo aos Aliados e acelerou
            a derrota das Potências Centrais.
          </p>
        </article>
      </section>
      <img src="https://static.preparaenem.com/2022/01/trincheira-na-primeira-guerra-mundial.jpg" />
      <img src="https://ogimg.infoglobo.com.br/in/23223989-970-9a5/FT1500A/652/41704050_1602.1979ARQUIVOINTER1-GUERRA-MUNDIAL-1.jpg" />
      <section className="bloco">
        <p>
          Em 1917, os Estados Unidos entraram na guerra ao lado da Tríplice
          Entente, após ataques de submarinos alemães a navios civis e pela
          revelação do Telegrama Zimmermann, no qual a Alemanha tentava
          convencer o México a entrar em guerra contra os EUA. A entrada
          americana trouxe novo ânimo aos Aliados e acelerou a derrota das
          Potências Centrais. A guerra terminou oficialmente em 11 de novembro
          de 1918, com a rendição da Alemanha e a assinatura do armistício de
          Compiègne. O saldo da guerra foi trágico: cerca de 10 milhões de
          mortos, 20 milhões de feridos, além de milhões de civis afetados por
          fome, doenças e deslocamentos forçados. Em 1919, foi assinado o
          Tratado de Versalhes, que impôs duras punições à Alemanha,
          responsabilizando-a pela guerra, exigindo indenizações financeiras
          pesadas, perdas territoriais e a redução drástica de seu exército. O
          tratado também provocou o fim de grandes impérios: o Austro-Húngaro, o
          Otomano, o Alemão e o Russo. No lugar desses impérios, surgiram novos
          países como Polônia, Tchecoslováquia e Iugoslávia. As consequências da
          guerra foram profundas e de longo alcance. A Alemanha saiu humilhada,
          com sua economia arrasada e a população ressentida, o que mais tarde
          seria explorado por ideologias extremistas, como o nazismo. A
          Revolução Russa, ocorrida durante a guerra, levou à formação da União
          Soviética e ao surgimento do comunismo como alternativa ao capitalismo
          ocidental. A Primeira Guerra Mundial também provocou mudanças sociais,
          como a maior participação das mulheres no mercado de trabalho, avanços
          tecnológicos e uma profunda desilusão com os valores tradicionais da
          sociedade europeia. Além disso, a guerra marcou o declínio da Europa
          como centro do poder mundial, abrindo espaço para a ascensão dos
          Estados Unidos e da União Soviética como novas superpotências. Com
          todos esses elementos, a Primeira Guerra Mundial não apenas mudou o
          mapa político da Europa, mas também lançou as bases para os grandes
          conflitos e transformações do século XX, incluindo a Segunda Guerra
          Mundial.
        </p>
      </section>
      <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2021/07/soldados-franceses-rastejando-em-seus-proprios-emaranhados-de-arame-farpado-na-batalha-de-verdun-primeira-guerra-mundial.jpg" />
      <img src="https://www.jornalopcao.com.br/assets/2014/08/Carta-da-europa-1-620x350.jpg" />
      <Footer />
    </div>
  );
}

export default PrimeiraGuerraMundial;
