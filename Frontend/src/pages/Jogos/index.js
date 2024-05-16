import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import valorant from "../../components/images/valorant.png";
import  CS2 from "../../components/images/CS2.png";
import leagueOfLegends from "../../components/images/leagueOfLegends.jpg";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <SportsEsportsIcon fontSize="medium" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Jogos
                    </Typography>
                    <div style={{ display: "flex", flexDirection: "row", width: "90vw", justifyContent: "center", }} >
                        <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "25vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="valorant" style={{ textDecoration: 'none' }}>
                                        
                                        <Card sx={{ maxWidth: "100%" }}>
                                            <CardActionArea>
                                                <CardMedia component="img" height="450" image={valorant} alt="valorant" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Valorant
                                                    </Typography>
                                                    <Typography gutterBottom variant="h8" component="div">
                                                        Sobre o jogo: Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "25vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="" style={{ textDecoration: 'none' }}>

                                        <Card sx={{ maxWidth: "100%" }}>
                                            <CardActionArea>
                                                <CardMedia component="img" height="450" image={CS2} alt="counterstrike2" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        Counter Strike 2
                                                    </Typography>
                                                    <Typography gutterBottom variant="h8" component="div">
                                                        Sobre o jogo: Counter-Strike 2 é um jogo tático multijogador de tiro em primeira pessoa.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "25vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="" style={{ textDecoration: 'none' }}>

                                        <Card sx={{ maxWidth: "100%" }}>
                                            <CardActionArea>
                                                <CardMedia component="img" height="450" image={leagueOfLegends} alt="leagueoflegends" />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        League of Legends
                                                    </Typography>
                                                    <Typography gutterBottom variant="h8" component="div">
                                                        Sobre o jogo: League of Legends é um jogo eletrônico do gênero multiplayer online battle arena.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>

                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Box>
            </Container>
        </ThemeProvider >
    );
};

export default Page;
