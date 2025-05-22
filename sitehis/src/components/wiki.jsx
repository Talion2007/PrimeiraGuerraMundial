import { useEffect, useState } from "react"; // Importa hooks do React

// Componente funcional Wikipedia
function Wikipedia(props) {
  // Estado para armazenar os dados retornados da API
  const [dados, setDados] = useState({});

  // useEffect para buscar informações da Wikipedia sempre que o tema mudar
  useEffect(() => {
    // Função assíncrona para buscar informações da API da Wikipedia
    async function PegarInformações() {
      try {
        // Codifica o tema recebido via props para ser usado na URL da API
        const codificado = encodeURIComponent(props.tema.replace(/ /g, '_'));
        const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${codificado}&exlimit=1&explaintext=1&origin=*`;

        console.log(URL); // Exibe a URL gerada no console para depuração

        // Faz a requisição para a API da Wikipedia
        const resposta = await fetch(URL);
        const data = await resposta.json(); // Converte a resposta para JSON

        // Obtém o ID da página retornada pela API
        const paginaID = Object.keys(data.query.pages)[0];
        const conteudo = data.query.pages[paginaID]; // Acessa os dados da página

        // Extrai o primeiro parágrafo do conteúdo retornado
        const primeiroParagrafo = conteudo.extract?.split('\n\n')[0];

        // Atualiza o estado com o conteúdo extraído
        setDados({ extract: primeiroParagrafo });
      } catch (error) {
        // Exibe um erro no console caso a requisição falhe
        console.error(`Erro ao buscar informações: ${error}`);
      }
    }

    // Chama a função para buscar informações
    PegarInformações();
  }, [props.tema]); // Executa o efeito sempre que o tema (props.tema) mudar

  // Renderiza o conteúdo extraído da Wikipedia
  return (
    <>
      {dados.extract} {/* Exibe o texto extraído da API */}
    </>
  );
}

export default Wikipedia; // Exporta o componente para uso em outras partes do projeto
