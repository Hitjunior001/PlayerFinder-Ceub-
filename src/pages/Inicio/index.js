import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
                                        PlayerFinder é um site Gamers brasileiros para Gamers brasileiros!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                width: "80vw"
                            }}
                        >
                            <Paper
                                component="div"
                                style={{
                                    padding: "1%",
                                    margin: "1%",
                                    width: "50%",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper
                                component="div"
                                style={{
                                    padding: "1%",
                                    margin: "1%",
                                    width: "50%",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Paper>

                        </div>
                    </div>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
