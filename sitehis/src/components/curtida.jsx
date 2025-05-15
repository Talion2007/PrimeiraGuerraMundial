import { useState } from 'react';
import '../styles/curtida.css'; // Importando o CSS para estilização

function Curtida(props) {
    const [avaliacao, setAvaliacao] = useState(() => {
        const curtidasalva = localStorage.getItem(props.id);
        return curtidasalva ? JSON.parse(curtidasalva) : 0;
    });

  const handleClick = (estrela) => {
    setAvaliacao(estrela);
    localStorage.setItem(props.id, estrela);
  };

  const renderEstrelas = () => {
    const estrelas = [];
    for (let i = 1; i <= 10; i++) {
      estrelas.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer', color: i <= avaliacao ? 'gold' : 'gray', fontSize: '1.5em'}}
        >
      ⚜
        </span>
      );
    }
    return estrelas;
  };

  return (
    <div className='avaliaçãoEstrelas'>
      <p>Avalie o {props.id}: </p>
      <p>
      {renderEstrelas()}
      </p>
    </div>
  );
}

export default Curtida;