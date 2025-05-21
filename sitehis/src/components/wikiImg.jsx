import { useEffect, useState } from "react";

function Wikipedia(props) {

    const [dados, setDados] = useState({});

    useEffect(() => {
        async function PegarInformações() {

            try {
                const codificado = encodeURIComponent(props.tema.replace(/ /g, '_'))
                const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles=${codificado}&piprop=thumbnail&pithumbsize=500&origin=*
`;

                console.log(URL)

                const resposta = await fetch(URL)
                const data = await resposta.json()

                const paginaID = Object.keys(data.query.pages)[0];
                    const conteudo = data.query.pages[paginaID];

                setDados(conteudo)
            }

        catch (error) {
            console.error(`Erro ao buscar informações: ${error}`);
        }
    }

    PegarInformações();

    }, [props.theme]);


return (
    <>
    <img src={dados.thumbnail ? dados.thumbnail.source : ''} alt={dados.title} />
    </>
)
}

export default Wikipedia;