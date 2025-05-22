import { useEffect, useState } from "react"; // Importa hooks do React

// Componente funcional Wikipedia
function Wikipedia(props) {
    // Estado para armazenar as URLs das imagens retornadas pela API
    const [imagens, setImagens] = useState([]);

    // useEffect para buscar imagens da Wikipedia sempre que o tema mudar
    useEffect(() => {
        // Função assíncrona para buscar informações da API da Wikipedia
        async function PegarInformações() {
            try {
                // Codifica o tema recebido via props para ser usado na URL da API
                const codificado = encodeURIComponent(props.tema.replace(/ /g, "_"));
                const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&generator=images&titles=${codificado}&prop=imageinfo&iiprop=url|dimensions&iiurlwidth=300&origin=*`;

                // Faz a requisição para a API da Wikipedia
                const resposta = await fetch(URL);
                const data = await resposta.json(); // Converte a resposta para JSON

                // Processa os dados retornados para extrair as URLs das imagens
                const imagens = Object.values(data.query.pages) // Obtém as páginas retornadas
                    .map(pagina => pagina.imageinfo?.[0]) // Acessa as informações de imagem de cada página
                    .slice(0, 3) // Limita a 3 imagens
                    .map(info => info.thumburl); // Obtém a URL da miniatura de cada imagem

                // Atualiza o estado com as URLs das imagens
                setImagens(imagens);

            } catch (error) {
                // Exibe um erro no console caso a requisição falhe
                console.error(`Erro ao buscar informações: ${error}`);
                setImagens([]); // Reseta o estado para um array vazio em caso de erro
            }
        }

        // Chama a função para buscar informações
        PegarInformações();
    }, [props.tema]); // Executa o efeito sempre que o tema (props.tema) mudar

    // Renderiza as imagens retornadas pela API
    return (
        <>
            {
                imagens.map((imagem => (
                    // Renderiza cada imagem com uma chave única e um texto alternativo
                    <img
                        key={imagem} // Usa a URL da imagem como chave única
                        src={imagem} // Define a URL da imagem
                        alt={`Imagem relacionada a ${props.tema}`} // Texto alternativo descritivo
                    />
                ))
                )}
        </>
    );
}

export default Wikipedia; // Exporta o componente para uso em outras partes do projeto