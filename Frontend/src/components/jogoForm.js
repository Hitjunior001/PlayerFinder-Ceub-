import React, { useState, useEffect } from 'react';
import { createJogo, updateJogo } from '../service/JogoService';

const JogoForm = ({ currentJogo, onSave }) => {
  const [jogo, setJogo] = useState({
    titulo: '',
    description: '',
  });

  useEffect(() => {
    if (currentJogo) {
      setJogo(currentJogo);
    }
  }, [currentJogo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJogo((prevJogo) => ({
      ...prevJogo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (jogo.id) {
      await updateJogo(jogo.id, jogo);
    } else {
      await createJogo(jogo);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input type="text" name="titulo" value={jogo.titulo} onChange={handleChange} required />
      </div>
      <div>
        <label>Descrição</label>
        <textarea name="description" value={jogo.description} onChange={handleChange} required />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default JogoForm;
