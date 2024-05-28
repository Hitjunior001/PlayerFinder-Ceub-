import React, { useEffect, useState } from 'react';
import { getAttributesByJogoId, deleteAttribute } from '../service/AttributeService';

const AttributeList = ({ jogoId }) => {
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    fetchAttributes();
  }, [jogoId]);

  const fetchAttributes = async () => {
    try {
      const data = await getAttributesByJogoId(jogoId);
      setAttributes(data);
    } catch (error) {
      console.error('Erro ao buscar atributos:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAttribute(id);
      fetchAttributes();
    } catch (error) {
      console.error('Erro ao deletar atributo:', error);
    }
  };

  return (
    <div>
      <h2>Atributos do Jogo</h2>
      <ul>
        {attributes.map((attribute) => (
          <li key={attribute.id}>
            <strong>{attribute.titulo}: </strong> {attribute.value}
            <button onClick={() => handleDelete(attribute.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttributeList;
