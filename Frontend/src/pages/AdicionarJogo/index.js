import React, { useEffect, useState } from "react";
import { Avatar, Box, Typography, Container, Paper, MenuItem, Select } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import CreatePerfilGameForm from "../../components/createPerfilGameForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Page = () => {

  const [selectedGame, setSelectedGame] = useState("");
  const [loading, setLoading] = useState(false);
  const [jogosDisponiveis, setJogosDisponiveis] = useState([]);
  const [atributos, setAtributos] = useState([]);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchJogosDisponiveis();
    if (selectedGame) {
      const selectedJogo = jogosDisponiveis.find(
        (jogo) => jogo.id === selectedGame
      );
      if (selectedJogo) {
        setSelectedAttributes({});
        setUsername("");
        setAtributos(selectedJogo.attributes);
      }
    }
  }, [selectedGame]);

  const fetchJogosDisponiveis = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/api/jogos/list`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setJogosDisponiveis(data);
      } else {
        throw new Error("Erro ao listar os jogos disponíveis");
      }
    } catch (error) {
      console.error("Erro ao listar os jogos disponíveis:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <AddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Adicionar jogo
          </Typography>
          <Box component="div" sx={{ mt: 1, display: "flex", flexDirection: "column", width: "90vw", alignItems: "center", }}>
            <Paper component="div" sx={{ p: "1%", m: "1%", width: "50vw", bgcolor: "#202020", borderRadius: "10px", }}>
              <Select
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Selecionar Jogo" }}
                style={{ width: "100%", color: "white" }}
              >
                <MenuItem value="" disabled>
                  Selecionar Jogo
                </MenuItem>
                {jogosDisponiveis.map((jogo) => (
                  <MenuItem key={jogo.id} value={jogo.id}>
                    {jogo.titulo}
                  </MenuItem>
                ))}
              </Select>
              {selectedGame && (
                <CreatePerfilGameForm
                  jogoId={selectedGame}
                  atributos={atributos}
                  loading={loading}
                  setLoading={setLoading}
                  selectedAttributes={selectedAttributes}
                  setSelectedAttributes={setSelectedAttributes}
                  username={username}
                  setUsername={setUsername}
                />
              )}
            </Paper>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;