import { useEffect, useState } from "react";

function Wikipedia(props) {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        async function PegarInformações() {
            try {
                const codificado = encodeURIComponent(props.tema.replace(/ /g, "_"));
                const URL = `https://pt.wikipedia.org/w/api.php?action=query&format=json&generator=images&titles=${codificado}&prop=imageinfo&iiprop=url|dimensions&iiurlwidth=300&origin=*`;

                const resposta = await fetch(URL);
                const data = await resposta.json();

                const imagens = Object.values(data.query.pages)
                    .map(pagina => pagina.imageinfo?.[0])
                    .slice(0, 3)
                    .map(info => info.thumburl);

                setImagens(imagens);

            } catch (error) {
                console.error(`Erro ao buscar informações: ${error}`);
                setImagens([]);
            }
        }

        PegarInformações();
    }, [props.tema]);

    return (
        <>
            {
                imagens.map((imagem => (
                    <img
                        key={imagem}
                        src={imagem}
                        alt={`Imagem relacionada a ${props.tema}`}
                    />
                ))
                )}
        </>
    );
}

export default Wikipedia;