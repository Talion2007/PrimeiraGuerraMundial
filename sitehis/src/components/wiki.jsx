import { useEffect, useState } from "react";

function Wikipedia(props) {

    const [dados, setDados] = useState({});
    const [imagem, setImagem] = useState(() => {
        const imagemSalva = localStorage.getItem(props.storage);
        return imagemSalva ? JSON.parse(imagemSalva) : '';
    });

    useEffect(() => {
        async function PegarInformações() {

            try {
                const codificado = encodeURIComponent(props.tema.replace(/ /g, '_'))
                const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&titles=${codificado}&exlimit=1&explaintext=1&piprop=thumbnail&pithumbsize=500&origin=*`;

                console.log(URL)

                const resposta = await fetch(URL)
                const data = await resposta.json()

                const paginaID = Object.keys(data.query.pages)[0];
                    const conteudo = data.query.pages[paginaID];

                setDados(conteudo)
                setImagem(conteudo.thumbnail.source);

                const imagemJson = JSON.stringify(conteudo.thumbnail.source);
                console.log(imagemJson);
                localStorage.setItem(props.storage, imagemJson);
            }

        catch (error) {
            console.error(`Erro ao buscar informações: ${error}`);
        }
    }

    PegarInformações();

    }, [props.theme]);


return (
    <>
    <p style={{ whiteSpace: 'pre-wrap' }}>{dados.extract}</p>
    </>
)
}

export default Wikipedia;