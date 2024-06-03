import React, { useState, useEffect } from 'react';
import JogoForm from '../../components/jogoForm';
import AttributeForm from '../../components/attributeForm';
import AttributeList from '../../components/attributeList'; 
import { getAllJogos } from '../../service/JogoService';

const Dashboard = () => {
  const [currentJogo, setCurrentJogo] = useState(null);
  const [currentAttribute, setCurrentAttribute] = useState(null);
  const [jogos, setJogos] = useState([]);
  const [selectedJogoId, setSelectedJogoId] = useState(null); 

  useEffect(() => {
    fetchJogos();
  }, []); 

  const fetchJogos = async () => {
    try {
      const data = await getAllJogos();
      setJogos(data);
    } catch (error) {
      console.error('Erro ao buscar jogos:', error);
    }
  };

  // const handleEditJogo = (jogo) => {
  //   setCurrentJogo(jogo);
  //   setSelectedJogoId(jogo.id); 
  // };

  const handleSaveJogo = () => {
    setCurrentJogo(null);
    fetchJogos(); 
  };

  const handleSaveAtributo = () => {
    setCurrentAttribute(null);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Gerenciar Jogos</h2>
        <JogoForm currentJogo={currentJogo} onSave={handleSaveJogo} />
        {/* <JogoList jogos={jogos} setJogos={setJogos} onEdit={handleEditJogo} /> */}
      </div>
      <div>
        <h2>Gerenciar Atributos</h2>
        {selectedJogoId && <AttributeList jogoId={selectedJogoId} />}

        <AttributeForm currentAttribute={currentAttribute} jogos={jogos} onSave={handleSaveAtributo} />
      </div>
    </div>
  );
};

export default Dashboard;
