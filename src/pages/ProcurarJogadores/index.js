import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
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
                        <SportsEsportsIcon fontSize="medium" />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Valorant
                    </Typography>

                    <Typography sx={{margin: '3%'}}>
                        <FilterDrawer />
                    </Typography>
                    
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "75vw"
                        }}
                    >

                        <Paper
                            component="div"
                            style={{
                                padding: "2%",
                                margin: "1%",
                                width: "95%",
                                backgroundColor: "#202020",
                                borderRadius: "10px",
                            }}
                        >
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <PlayerList />
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
