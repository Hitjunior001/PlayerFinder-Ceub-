import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputFileUpload from "../../components/fileUpload";
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const Page = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            Usuário: data.get("usuario"),
            Nome: data.get("nome"),
            Email: data.get("email"),
            Senha: data.get("senha"),
            ConfirmaSenha: data.get("confirmaSenha"),
            Telefone: data.get("telefone"),
        });
    };

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
                    <Avatar sx={{ m: 1, bgcolor: "inherit" }}>
                        <AccountCircleIcon style={{ fontSize: '50px', color: "#16C83D" }} />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Meu perfil
                    </Typography>
                    
                    <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                width: "8vw",
                                color: 'white',
                                bgcolor: "#16C83D",
                                "&:hover": { backgroundColor: "#16C83D" },
                            }}
                        >
                            Editar
                        </Button>

                    <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                                    padding: "1%",
                                    margin: "1%",
                                    width: "30vw",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <InputFileUpload />
                                    </Grid>
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper
                                component="div"
                                style={{
                                    padding: "1%",
                                    margin: "1%",
                                    width: "30vw",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={2.5}>
                                    <Grid item xs={12}>

                                    </Grid>
                                </Grid>
                            </Paper>

                            <Paper
                                component="div"
                                style={{
                                    padding: "1%",
                                    margin: "1%",
                                    width: "30vw",
                                    backgroundColor: "#202020",
                                    borderRadius: "10px",
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        
                                    </Grid>
                                </Grid>
                            </Paper>
                        </div>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default Page;
