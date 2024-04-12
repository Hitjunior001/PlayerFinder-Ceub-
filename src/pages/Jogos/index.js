import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper";
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import JogosAreaCard from "../../components/JogosCard";
import { Link } from "react-router-dom";

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
                            flexDirection: "row",
                            width: "90vw",
                            justifyContent: "center",
                        }}
                    >
                        <Paper
                            component="div"
                            style={{
                                padding: "0.5%",
                                margin: "1%",
                                width: "30vw",
                                backgroundColor: "#202020",
                                borderRadius: "10px",
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <JogosAreaCard />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper
                            component="div"
                            style={{
                                padding: "0.5%",
                                margin: "1%",
                                width: "30vw",
                                backgroundColor: "#202020",
                                borderRadius: "10px",
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <JogosAreaCard />
                                    </Link>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Paper
                            component="div"
                            style={{
                                padding: "0.5%",
                                margin: "1%",
                                width: "30vw",
                                backgroundColor: "#202020",
                                borderRadius: "10px",
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <JogosAreaCard />
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
