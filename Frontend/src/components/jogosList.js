import React, { useEffect } from 'react';
import { getAllJogos, deleteJogo } from '../service/JogoService';

const JogoList = ({ onEdit, jogos, setJogos }) => {
  useEffect(() => {
    fetchJogos();
  }, []);

  const fetchJogos = async () => {
    const data = await getAllJogos();
    setJogos(data);
  };

  const handleDelete = async (id) => {
    await deleteJogo(id);
    fetchJogos();
  };

  return (
    <div>
      <h2>Jogos</h2>
      <ul>
        {jogos.map((jogo) => (
          <li key={jogo.id}>
            {jogo.titulo}
            <button onClick={() => onEdit(jogo)}>Editar</button>
            <button onClick={() => handleDelete(jogo.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JogoList;
