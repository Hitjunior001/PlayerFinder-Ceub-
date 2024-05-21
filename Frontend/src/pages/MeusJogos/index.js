import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, Paper, MenuItem, Select, Button, CircularProgress, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import useAuth from '../../hooks/useAuth';

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

    useEffect(() => {
        fetchJogosNoPerfil();
        fetchJogosDisponiveis(); 
    }, []);

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

    const handleAddGame = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:8080/jogo/perfil`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    jogoId: selectedGame
                })
            });

            if (response.ok) {
                console.log("Jogo adicionado com sucesso ao perfil do usuário!");
                fetchJogosNoPerfil(); // Atualiza a lista de jogos no perfil após adicionar
            } else {
                throw new Error("Erro ao adicionar jogo ao perfil do usuário");
            }
        } catch (error) {
            console.error("Erro ao adicionar jogo ao perfil do usuário:", error);
        } finally {
            setLoading(false);
        }
    };

    const jogoEstaNoPerfil = (jogoId) => {
        return jogosNoPerfil.some(jogo => jogo.id === jogoId);
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
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={!selectedGame || loading}
                                onClick={handleAddGame}
                                style={{ marginTop: "1%" }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : "Adicionar Jogo"}
                            </Button>
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
