import React, { useState, useEffect } from 'react';
import { Select, MenuItem } from "@mui/material";
import { createAttribute } from '../service/JogoService';

const AttributeForm = ({ currentAttribute, onSave, jogos }) => {
  const [attribute, setAttribute] = useState({
    titulo: '',
    value: '',
    jogo: { id: '' },
  });

  useEffect(() => {
    if (currentAttribute) {
      setAttribute(currentAttribute);
    }
  }, [currentAttribute]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'jogoId') {
      setAttribute((prevAttribute) => ({
        ...prevAttribute,
        jogo: { id: value },
      }));
    } else {
      setAttribute((prevAttribute) => ({
        ...prevAttribute,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!attribute.jogo || !attribute.jogo.id) {
      const selectedJogo = jogos.find(jogo => jogo.id === attribute.jogo.id);
      if (selectedJogo) {
        setAttribute(prevAttribute => ({
          ...prevAttribute,
          jogo: selectedJogo
        }));
      }
    }

    await createAttribute(attribute);
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
            <Select
        value={attribute.jogo.id || ''} 
        name='jogoId'
        onChange={handleChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Selecionar Jogo' }}
        style={{ width: "100%", color: 'white' }}
      >
        <MenuItem value="" disabled>
          Selecionar Jogo
        </MenuItem>
        {jogos.map((jogo) => (
          <MenuItem key={jogo.id} value={jogo.id}>
            {jogo.titulo}
          </MenuItem>
        ))}
      </Select>
      <div>
        <label>Atributo</label>
        
        <input type="text" name="titulo" value={attribute.titulo} onChange={handleChange} required />
      </div>
      <div>
        <label>Valor</label>
        <textarea name="value" value={attribute.value} onChange={handleChange} required />
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default AttributeForm;
