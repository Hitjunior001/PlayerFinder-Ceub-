import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, Paper, MenuItem, Select, Button, CircularProgress, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import useAuth from '../../hooks/useAuth';
import CreatePerfilGameForm from "../../components/createPerfilGameForm";


const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {
    const { user } = useAuth();
    const [selectedGame, setSelectedGame] = useState('');
    const [loading, setLoading] = useState(false);
    const [jogosDisponiveis, setJogosDisponiveis] = useState([]);
    const [jogosNoPerfil, setJogosNoPerfil] = useState([]);
    const [perfilJogosLoaded, setPerfilJogosLoaded] = useState(false);
    const [atributos, setAtributos] = useState([]);
    const [selectedAttributes, setSelectedAttributes] = useState({});
    const [username, setUsername] = useState('');
    const [profilesGames, setProfilesGames] = useState([]);




    useEffect(() => {
        fetchJogosNoPerfil();
        fetchJogosDisponiveis(); 
        fetchProfilesGames()
        if (selectedGame) {
          const selectedJogo = jogosDisponiveis.find((jogo) => jogo.id === selectedGame);
          if (selectedJogo) {
            setSelectedAttributes({});
            setUsername('');
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
                
                }
                else {
                  throw new Error("Erro ao listar os jogos disponíveis");
            } 
            
        } catch (error) {
            console.error("Erro ao listar os jogos disponíveis:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchJogosNoPerfil = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:8080/perfil/jogos/meus-jogos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setJogosNoPerfil(data);
                setPerfilJogosLoaded(true);
            } else {
                throw new Error("Erro ao listar os jogos do perfil");
            }
        } catch (error) {
            console.error("Erro ao listar os jogos do perfil:", error);
        } finally {
            setLoading(false);
        }
    };

    const fetchProfilesGames = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:8080/perfil/jogos/perfil-jogos`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setProfilesGames(data);
            } else {
                throw new Error("Erro ao listar os perfil dos jogo");
            }
        } catch (error) {
            console.error("Erro ao listar os perfil dos jogos:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteGame = async (jogoId) => {
        setLoading(true);
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(`http://localhost:8080/jogo/perfil/delete`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              jogoId,
            })
          });
      
          if (response.ok) {
            console.log("Perfil de jogo excluído com sucesso!");
            fetchProfilesGames();
            fetchJogosNoPerfil(); 
          } else {
            const data = await response.json();
            console.error("Erro ao excluir perfil de jogo:", data.message);
          }
        } catch (error) {
          console.error("Erro ao excluir perfil de jogo:", error);
        } finally {
          setLoading(false);
        }
      };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <SportsEsportsIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Meus Jogos
                    </Typography>
                    <Box component="div" sx={{ mt: 1, display: "flex", flexDirection: "column", width: "90vw", alignItems: 'center' }}>
                        <Paper component="div" style={{ padding: "1%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px" }}>
                            <Select
                                value={selectedGame}
                                onChange={(e) => setSelectedGame(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Selecionar Jogo' }}
                                style={{ width: "100%", color: 'white' }}
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
        <CreatePerfilGameForm jogoId={selectedGame} atributos={atributos} loading = {loading} setLoading = {setLoading} 
        selectedAttributes = {selectedAttributes} setSelectedAttributes = {setSelectedAttributes} username={username} setUsername={setUsername} />
      )}
                        </Paper>
                        {perfilJogosLoaded && (
                            <TableContainer component={Paper} style={{ padding: "1%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px", marginTop: "2%" }}>
                                <Typography variant="h6" style={{ color: "white", marginBottom: "1%" }}>Jogos no Perfil:</Typography>
                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>ID</TableCell>
                                            <TableCell>Título</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {jogosNoPerfil.map((jogo) => (
                                            <TableRow key={jogo.id}>
                                                <TableCell>{jogo.id}</TableCell>
                                                <TableCell>{jogo.titulo}</TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteGame(jogo.id)}
                                                    >
                                                    Deletar
                                                </Button>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Username</TableCell>
                                            <TableCell>Jogo</TableCell>
                                            <TableCell>Atributos</TableCell>
                                            <TableCell>Excluir</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {profilesGames.map((perfil) => (
                                        <TableRow key={perfil.id}>
                                            <TableCell>{perfil.username}</TableCell>
                                            <TableCell>{perfil.jogo.titulo}</TableCell>
                                            <TableCell>{perfil.attribute.titulo}: {perfil.attribute.value}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => handleDeleteGame(perfil.jogo.id)}
                                                    >
                                                    Deletar
                                                </Button>
                                            
                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    
                                </Table>
                            </TableContainer>
                        )}
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
