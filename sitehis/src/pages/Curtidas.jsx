import Footer from "../components/footer"; // Importa o componente Footer
import Header from "../components/header"; // Importa o componente Header
import "../styles/page.css"; // Importa o arquivo CSS para estilização

// Componente funcional Curtidas
function Curtidas() {
  // Recupera as notas de "Canudos" do localStorage ou define como 0 se não existir
  const artigoCanudos = localStorage.getItem("Artigo Canudos") || 0;
  const videoCanudos = localStorage.getItem("Video Canudos") || 0;
  const wikipediaCanudos = localStorage.getItem("Wikipedia Canudos") || 0;

  // Calcula a média das notas de "Canudos"
  const mediaCanudos = (
    (parseInt(artigoCanudos) +
      parseInt(videoCanudos) +
      parseInt(wikipediaCanudos)) /
    3
  ).toFixed(2);

  // Recupera as notas de "Contestado" do localStorage ou define como 0 se não existir
  const artigoContestado = localStorage.getItem("Artigo Contestado") || 0;
  const videoContestado = localStorage.getItem("Video Contestado") || 0;
  const wikipediaContestado = localStorage.getItem("Wikipedia Contestado") || 0;

  // Calcula a média das notas de "Contestado"
  const mediaContestado = (
    (parseInt(artigoContestado) +
      parseInt(videoContestado) +
      parseInt(wikipediaContestado)) /
    3
  ).toFixed(2);

  // Recupera as notas de "Primeira Guerra Mundial" do localStorage ou define como 0 se não existir
  const artigoPrimeiraGuerra =
    localStorage.getItem("Artigo Primeira Guerra") || 0;
  const videoPrimeiraGuerra =
    localStorage.getItem("Video Primeira Guerra") || 0;
  const wikipediaPrimeiraGuerra =
    localStorage.getItem("Wikipedia Primeira Guerra") || 0;

  // Calcula a média das notas de "Primeira Guerra Mundial"
  const mediaPrimeiraGuerra = (
    (parseInt(artigoPrimeiraGuerra) +
      parseInt(videoPrimeiraGuerra) +
      parseInt(wikipediaPrimeiraGuerra)) /
    3
  ).toFixed(2);

  // Recupera as notas de "Revolução Russa" do localStorage ou define como 0 se não existir
  const artigoRevolucaoRussa =
    localStorage.getItem("Artigo Revolução Russa") || 0;
  const videoRevolucaoRussa =
    localStorage.getItem("Video Revolução Russa") || 0;
  const wikipediaRevolucaoRussa =
    localStorage.getItem("Wikipedia Revolução Russa") || 0;

  // Calcula a média das notas de "Revolução Russa"
  const mediaRevolucaoRussa = (
    (parseInt(artigoRevolucaoRussa) +
      parseInt(videoRevolucaoRussa) +
      parseInt(wikipediaRevolucaoRussa)) /
    3
  ).toFixed(2);

  // Recupera as notas de "Fascismo Italiano" do localStorage ou define como 0 se não existir
  const artigoFascismoItaliano =
    localStorage.getItem("Artigo Fascismo Italiano") || 0;
  const videoFascismoItaliano =
    localStorage.getItem("Video Fascismo Italiano") || 0;
  const wikipediaFascismoItaliano =
    localStorage.getItem("Wikipedia Fascismo Italiano") || 0;

  // Calcula a média das notas de "Fascismo Italiano"
  const mediaFascismoItaliano = (
    (parseInt(artigoFascismoItaliano) +
      parseInt(videoFascismoItaliano) +
      parseInt(wikipediaFascismoItaliano)) /
    3
  ).toFixed(2);

  // Recupera as notas de "Crise de 1929" do localStorage ou define como 0 se não existir
  const artigoCrise1929 = localStorage.getItem("Artigo Crise de 1929") || 0;
  const videoCrise1929 = localStorage.getItem("Video Crise de 1929") || 0;
  const wikipediaCrise1929 =
    localStorage.getItem("Wikipedia Crise de 1929") || 0;

  // Calcula a média das notas de "Crise de 1929"
  const mediaCrise1929 = (
    (parseInt(artigoCrise1929) +
      parseInt(videoCrise1929) +
      parseInt(wikipediaCrise1929)) /
    3
  ).toFixed(2);

  // Cria um array com as médias de cada tema
  const medias = [
    { nome: "Canudos", nota: mediaCanudos || 0 },
    { nome: "Contestado", nota: mediaContestado || 0 },
    { nome: "Primeira Guerra", nota: mediaPrimeiraGuerra || 0 },
    { nome: "Revolução Russa", nota: mediaRevolucaoRussa || 0 },
    { nome: "Fascismo Italiano", nota: mediaFascismoItaliano || 0 },
    { nome: "Crise de 1929", nota: mediaCrise1929 || 0 },
  ];

  // Ordena os temas por nota em ordem decrescente
  const mediaOrdenada = medias.sort((a, b) => b.nota - a.nota);

  // Renderiza o componente
  return (
    <>
      <Header titulo="Avaliações" /> {/* Renderiza o cabeçalho com o título "Avaliações" */}

      <section className="bloco">
        <h2>Ranking das Notas:</h2>
        {mediaOrdenada.map((media, index) => (
          <div key={media.nome} className="ranking">
            <h2>{index + 1}° - {media.nome}</h2> {/* Exibe a posição e o nome do tema */}
            <h3>Nota: {media.nota}</h3> {/* Exibe a nota média */}
          </div>
        ))}

        <h2>Informações de cada página:</h2>
        {/* Renderiza as informações detalhadas de cada tema */}
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
        <div className="ranking">
          <h2>Primeira Guerra</h2>
          <h3>Artigo Primeira Guerra: Nota {artigoPrimeiraGuerra}</h3>
          <h3>Wikipedia Primeira Guerra: {wikipediaPrimeiraGuerra}</h3>
          <h3>Video Primeira Guerra: {videoPrimeiraGuerra}</h3>
        </div>
        <div className="ranking">
          <h2>Revolução Russa</h2>
          <h3>Artigo Revolução Russa: Nota {artigoRevolucaoRussa}</h3>
          <h3>Wikipedia Revolução Russa: {wikipediaRevolucaoRussa}</h3>
          <h3>Video Revolução Russa: {videoRevolucaoRussa}</h3>
        </div>
        <div className="ranking">
          <h2>Fascismo Italiano</h2>
          <h3>Artigo Fascismo Italiano: Nota {artigoFascismoItaliano}</h3>
          <h3>Wikipedia Fascismo Italiano: {wikipediaFascismoItaliano}</h3>
          <h3>Video Fascismo Italiano: {videoFascismoItaliano}</h3>
        </div>
        <div className="ranking">
          <h2>Crise de 1929</h2>
          <h3>Artigo Crise de 1929: Nota {artigoCrise1929}</h3>
          <h3>Wikipedia Crise de 1929: {wikipediaCrise1929}</h3>
          <h3>Video Crise de 1929: {videoCrise1929}</h3>
        </div>
      </section>

      <Footer /> {/* Renderiza o rodapé */}
    </>
  );
}

export default Curtidas; // Exporta o componente para uso em outras partes do projeto
