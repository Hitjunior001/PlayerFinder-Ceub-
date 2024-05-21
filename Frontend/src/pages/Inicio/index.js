import React from "react";
import { Avatar, Grid, Box, Typography, Container, Paper, Card, CardContent, CardMedia, CardActionArea, Divider } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
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
                <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
                    <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
                        <HomeIcon fontSize="medium" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Início
                    </Typography>

                    <Grid container spacing={3} sx={{ width: "80vw", mt: 3 }} >
                        <Grid xs>
                            <Paper component="div" sx={{ p: 2, m: 2, bgcolor: "#202020", borderRadius: "10px" }}>
                                <Grid container spacing={2} justifyContent={'center'} mb={2}>
                                    <Typography variant='h4' sx={{pt: 2}}> Novos usuários </Typography>
                                    <Divider sx={{bgcolor: '#16C83D', width: '70%'}}/>
                                </Grid>
                                <UsersList/>
                            </Paper>
                        </Grid>

                        <Grid xs >
                            <Paper component="div" sx={{ p: 1, m: 2, width: "100%", backgroundColor: "#202020", borderRadius: "10px", }} >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Typography variant="h6" sx={{ color: '#16C83D' }}>
                                            Sobre o site:
                                        </Typography>
                                        <Typography>
                                            PlayerFinder é uma plataforma de busca de jogadores. Aqui você pode buscar pessoas para jogar junto, de acordo com suas preferências e habilidades!
                                            Podendo criar seu perfil de jogador, mostrar seus jogos favoritos, preferência de estilo de jogo e nível de habilidade, entre outras coisas.
                                            Após os tudo pronto, explore nossa comunidade diversificada de jogadores ávidos, pesquisando por títulos específicos ou simplesmente navegando pelas opções disponíveis.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper component="div" sx={{ p: 1, m: 2, width: "100%", backgroundColor: "#202020", borderRadius: "10px", }} >
                                <Link to="/jogos" style={{textDecoration: 'none'}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia component="img" height="250" image={jogos} alt="jogos" />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                        Jogos
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Paper>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
