import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JogosAreaCard from "../../components/JogosCard";

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

                        <Paper
                            component="div"
                            style={{
                                padding: "1%",
                                margin: "1%",
                                width: "100%",
                                backgroundColor: "#202020",
                                borderRadius: "10px",
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h6">
                                        Sobre o site:
                                    </Typography>
                                    <Typography>
                                    Bem-vindo ao PlayerFinder, o seu novo ponto de encontro online para encontrar parceiros de jogo no Brasil!
                                    Aqui, nós entendemos a importância de encontrar o parceiro de jogo perfeito - alguém que compartilha seu entusiasmo, estratégia e paixão pelos jogos.
                                    Criado por jogadores brasileiros para jogadores brasileiros, o PlayerFinder é mais do que apenas um site; 
                                    é uma comunidade vibrante dedicada a criar conexões genuínas entre gamers que buscam experiências multiplayer emocionantes.
                                    Se você está procurando formar uma equipe para conquistar missões desafiadoras ou simplesmente quer alguém com quem competir em partidas competitivas, o PlayerFinder é o lugar certo para você. Nossa plataforma oferece uma maneira simples e eficaz de encontrar jogadores com interesses semelhantes, seja para aventuras cooperativas, batalhas emocionantes ou partidas descontraídas.
                                    Aqui, você pode criar seu perfil de jogador, indicar seus jogos favoritos, horários disponíveis e preferências de estilo de jogo. Em seguida, explore nossa comunidade diversificada de jogadores ávidos, pesquisando por títulos específicos ou simplesmente navegando pelas opções disponíveis. Com apenas alguns cliques, você estará conectado a outros gamers entusiasmados que compartilham seus interesses.
                                    No PlayerFinder, a diversão começa com a conexão. Junte-se a nós e descubra uma maneira totalmente nova de experimentar seus jogos favoritos - com amigos e colegas de equipe que tornam cada jogada ainda mais emocionante. Prepare-se para mergulhar em uma experiência de jogo verdadeiramente colaborativa e faça novas amizades ao longo do caminho.
                                    Estamos ansiosos para vê-lo no PlayerFinder, onde encontrar seu parceiro de jogo ideal é apenas o começo de uma jornada emocionante. Vamos jogar juntos!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>

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
                                    padding: "0.5%",
                                    margin: "1%",
                                    width: "50%",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                
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
                                <JogosAreaCard/>
                            </Paper>

                        </div>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
