import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Button, CircularProgress } from '@mui/material';
import valorant from "../../components/images/valorant.png";
import CS2 from "../../components/images/CS2.png";
import leagueOfLegends from "../../components/images/leagueOfLegends.jpg";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {
    const api = "http://localhost:8080/api";
    const [jogos, setJogos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchJogos();
    }, []);

    const fetchJogos = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${api}/jogos/list`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                setJogos(data); // Armazena os jogos na variável de estado
            } else {
                throw new Error("Erro ao listar os jogos");
            }
        } catch (error) {
            console.error("Erro ao listar os jogos:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="lg">
                <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <SportsEsportsIcon fontSize="medium" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Jogos
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
                        {loading ? (
                            <CircularProgress color="inherit" />
                        ) : (
                            jogos.map((jogo) => (
                                <Grid item key={jogo.id}>
                                    <Paper component="div" style={{ padding: "1%", margin: "1%", width: "25vw", backgroundColor: "#202020", borderRadius: "10px", }}>
                                        <Link to={`/jogos/${jogo.id}`} style={{ textDecoration: 'none' }}>
                                            <Card sx={{ maxWidth: "100%" }}>
                                                <CardActionArea>
                                                    <CardMedia component="img" height="450" image={getJogoImage(jogo.titulo)} alt={jogo.titulo} />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                            {jogo.titulo}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body1" component="div">
                                                            Sobre o jogo: {jogo.descricao}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Link>
                                    </Paper>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

const getJogoImage = (titulo) => {
    switch (titulo.toLowerCase()) {
        case "valorant":
            return valorant;
        case "counter strike 2":
            return CS2;
        case "league of legends":
            return leagueOfLegends;
        default:
            return "";
    }
};

export default Page;
