import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Grid, Box, Container, Typography, Paper, Divider } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PlayerList from "../../components/playerlist";
import FilterDrawer from "../../components/filterDrawer";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {
    const { jogoId } = useParams();
    const [jogo, setJogo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJogo = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`http://localhost:8080/api/jogos/${jogoId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setJogo(data);
                } else {
                    throw new Error("Erro ao buscar o jogo");
                }
            } catch (error) {
                console.error("Erro ao buscar o jogo:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJogo();
    }, [jogoId]);

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="md">
                <Box sx={{ mt: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <SportsEsportsIcon fontSize="medium" />
                    </Avatar>
                    {loading ? (
                        <Typography component="h1" variant="h5">
                            Carregando...
                        </Typography>
                    ) : (
                        <Typography component="h1" variant="h5">
                            {jogo ? jogo.titulo : "Jogo não encontrado"}
                        </Typography>
                    )}

                    <Typography sx={{ margin: '3%' }}>
                        <FilterDrawer />
                    </Typography>
                    
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "75vw" }} >
                        <Paper component="div" sx={{ p: 2, m: 2, width: "95%", bgcolor: "#202020", borderRadius: "10px", }} >
                            <Grid container spacing={3}>
                                <Grid item>
                                    <Grid container spacing={2} justifyContent={'center'} mb={2}>
                                        <Typography variant='h4' sx={{pt: 2}}> Jogadores Valorant </Typography>
                                        <Divider sx={{bgcolor: '#16C83D', width: "80%"}}/>
                                    </Grid>
                                    <PlayerList jogoId={jogoId} />
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;