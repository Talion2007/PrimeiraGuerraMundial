import Footer from "../components/footer";
import Header from "../components/header";
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

  const artigoRevolucaoRussa = localStorage.getItem("Artigo Revolução Russa") || 0;
  const videoRevolucaoRussa = localStorage.getItem("Video Revolução Russa")
  const wikipediaRevolucaoRussa = localStorage.getItem("Wikipedia Revolução Russa") || 0;
  const mediaRevolucaoRussa = ((parseInt(artigoRevolucaoRussa) + parseInt(videoRevolucaoRussa) + parseInt(wikipediaRevolucaoRussa)) / 3).toFixed(2);

  const artigoFascismoItaliano = localStorage.getItem("Artigo Fascismo Italiano") || 0;
  const videoFascismoItaliano = localStorage.getItem("Video Fascismo Italiano") || 0;
  const wikipediaFascismoItaliano = localStorage.getItem("Wikipedia Fascismo Italiano") || 0;
  const mediaFascismoItaliano = ((parseInt(artigoFascismoItaliano) + parseInt(videoFascismoItaliano) + parseInt(wikipediaFascismoItaliano)) / 3).toFixed(2);

  const artigoCrise1929 = localStorage.getItem("Artigo Crise de 1929") || 0;
  const videoCrise1929 = localStorage.getItem("Video Crise de 1929") || 0;
  const wikipediaCrise1929 = localStorage.getItem("Wikipedia Crise de 1929") || 0;
  const mediaCrise1929 = ((parseInt(artigoCrise1929) + parseInt(videoCrise1929) + parseInt(wikipediaCrise1929)) / 3).toFixed(2);

  const medias = [
    { nome: "Canudos", nota: mediaCanudos || 0 },
    { nome: "Contestado", nota: mediaContestado || 0 },
    { nome: "Primeira Guerra", nota: mediaPrimeiraGuerra || 0 },
    { nome: "Revolução Russa", nota: mediaRevolucaoRussa || 0 },
    { nome: "Fascismo Italiano", nota: mediaFascismoItaliano || 0 },
    { nome: "Crise de 1929", nota: mediaCrise1929 || 0 }
  ];

  // Ordenar as notas em ordem decrescente
  const mediaOrdenada = medias.sort((a, b) => b.nota - a.nota);

  return (
    <>
      <Header titulo="Avaliações" />

      <section className="bloco">
        <h2>Ranking das Notas: </h2>
        {mediaOrdenada.map((media, index) => (
          <div key={media.nome} className="ranking">
            <h2>{index + 1}° - {media.nome}</h2>
            <h3>Nota: {media.nota}</h3>
          </div>
        ))}
        <h2>Informações de cada pagina: </h2>
        <div className="ranking">
          <h2>Canudos</h2>
          <h3>Artigo Canudos: Nota {artigoCanudos}</h3>
          <h3>Wikipedia Canudos: {wikipediaCanudos}</h3>
          <h3>Video Canudos: {videoCanudos}</h3>
        </div>
        <div className="ranking">
          <h2>Contestado</h2>
          <h3>Artigo Contestado: Nota {artigoContestado}</h3>
          <h3>Wikipedia Contestado: {wikipediaContestado}</h3>
          <h3>Video Contestado: {videoContestado}</h3>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Curtidas;