import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JogoList from "../../components/jogosList";
import FilterPerGame from "../../components/FilterPerGame";
import { getAllJogos } from "../../service/JogoService";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CadastrarGame = () => {
  const [loading, setLoading] = useState(true);
  const [jogos, setJogos] = useState([]);
  const [selectedJogoId, setSelectedJogoId] = useState(null);
  const [atributos, setAtributos] = useState([]);

  useEffect(() => {
    const fetchJogos = async () => {
      try {
        const data = await getAllJogos();
        setJogos(data);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJogos();
  }, []);

  useEffect(() => {
    if (selectedJogoId) {
      const selectedJogo = jogos.find((jogo) => jogo.id === selectedJogoId);
      if (selectedJogo) {
        console.log(selectedJogo)
        console.log(selectedJogo.attributes)

        setAtributos(selectedJogo.attributes);
      }
    }
  }, [selectedJogoId, jogos]);

  const handleJogoSelect = (jogoId) => {
    setSelectedJogoId(jogoId);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <JogoList
        jogos={jogos}
        setJogos={setJogos}
        setSelectedJogoId = {setSelectedJogoId}
        handleJogoSelect={handleJogoSelect}
      />
      {selectedJogoId && (
        <FilterPerGame jogoId={selectedJogoId} atributos={atributos} loading = {loading} setLoading = {setLoading}/>
      )}
    </ThemeProvider>
  );
};

export default CadastrarGame;
