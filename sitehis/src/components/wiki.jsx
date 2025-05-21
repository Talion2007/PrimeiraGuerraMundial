import { useEffect, useState } from "react";

function Wikipedia(props) {
  const [dados, setDados] = useState({});

  useEffect(() => {
    async function PegarInformações() {
      try {
        const codificado = encodeURIComponent(props.tema.replace(/ /g, '_'));
        const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${codificado}&exlimit=1&explaintext=1&origin=*`;

        console.log(URL);

        const resposta = await fetch(URL);
        const data = await resposta.json();

        const paginaID = Object.keys(data.query.pages)[0];
        const conteudo = data.query.pages[paginaID];

        const primeiroParagrafo = conteudo.extract?.split('\n\n')[0];

        setDados({ extract: primeiroParagrafo });
      } catch (error) {
        console.error(`Erro ao buscar informações: ${error}`);
      }
    }

    PegarInformações();
  }, [props.tema]);

  return (
    <>
      <p style={{ whiteSpace: 'pre-wrap' }}>{dados.extract}</p>
    </>
  );
}

export default Wikipedia;
