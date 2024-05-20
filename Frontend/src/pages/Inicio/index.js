import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import jogos from "../../components/images/jogos.jpg";
import UsersList from "../../components/usersList"

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {

    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: "2vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <HomeIcon fontSize="medium" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Início
                    </Typography>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "80vw"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "105%"
                            }}
                            >
                            <Paper
                                component="div"
                                style={{
                                    padding: "2%",
                                    margin: "1%",
                                    width: "50%",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" sx={{ color: '#16C83D' }}>
                                            Como usar o site:
                                        </Typography>
                                        <Typography>
                                            Aqui, você pode criar seu perfil de jogador, mostrar seus jogos favoritos, preferência de estilo de jogo e nível de habilidade, entre outros.<br />
                                            Em seguida, explore nossa comunidade diversificada de jogadores ávidos, pesquisando por títulos específicos ou simplesmente navegando pelas opções disponíveis.<br />
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper
                                component="div"
                                style={{
                                    padding: "0.5%",
                                    margin: "1%",
                                    width: "50%",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Link to="/jogos" style={{textDecoration: 'none'}}>
                                    <Card sx={{ maxWidth: "100%" }}>
                                        <CardActionArea>
                                            <CardMedia
                                            component="img"
                                            height="200"
                                            image={jogos}
                                            alt="jogos"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        Jogos
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Paper>

                        </div>
                            <UsersList/>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
