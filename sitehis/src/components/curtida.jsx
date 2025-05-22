import { useState } from 'react';
import '../styles/curtida.css'; // Importando o CSS para estilização

// Componente funcional Curtida
function Curtida(props) {
    // Estado para armazenar a avaliação do usuário
    const [avaliacao, setAvaliacao] = useState(() => {
        // Recupera a avaliação salva no localStorage, se existir
        const curtidasalva = localStorage.getItem(props.id);
        return curtidasalva ? JSON.parse(curtidasalva) : 0;
    });

    // Função chamada ao clicar em uma estrela
    const handleClick = (estrela) => {
        setAvaliacao(estrela); // Atualiza a avaliação no estado
        localStorage.setItem(props.id, estrela); // Salva a avaliação no localStorage
    };

    // Função para zerar a avaliação
    const zerar = () => {
        setAvaliacao(0); // Reseta a avaliação no estado
        localStorage.removeItem(props.id); // Remove a avaliação do localStorage
    };

    // Função para renderizar as estrelas
    const renderEstrelas = () => {
        const estrelas = [];
        for (let i = 1; i <= 10; i++) {
            estrelas.push(
                <span
                    key={i} // Chave única para cada estrela
                    onClick={() => handleClick(i)} // Define a avaliação ao clicar
                    style={{
                        cursor: 'pointer', // Define o cursor como "pointer" ao passar o mouse
                        color: i <= avaliacao ? 'gold' : 'gray', // Cor dourada para estrelas selecionadas
                        fontSize: '1.5em' // Tamanho da fonte das estrelas
                    }}
                >
                    ⚜
                </span>
            );
        }
        return estrelas; // Retorna o array de estrelas
    };

    // Renderização condicional com base na avaliação
    return (
        <>
            {avaliacao > 0 ? (
                // Exibe a nota e botão para alterar se já houver avaliação
                <div className='avaliaçãoEstrelas'>
                    <p>Nota: {avaliacao} - Obrigado por avaliar!</p>
                    <p>
                        <button onClick={zerar}>Alterar nota!</button>
                    </p>
                </div>
            ) : (
                // Exibe as estrelas para avaliação se ainda não houver nota
                <div className='avaliaçãoEstrelas'>
                    <p>Avalie o {props.id}: </p>
                    <p>{renderEstrelas()}</p>
                </div>
            )}
        </>
    );
}

export default Curtida; // Exporta o componente para uso em outras partes do projeto