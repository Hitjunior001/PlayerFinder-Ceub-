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
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Usuário:
                                            </Typography>
                                            <Typography variant="h6">
                                                Sempert21
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Nome:
                                            </Typography>
                                            <Typography variant="h6">
                                                Gustavo Erhardt
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Email:
                                            </Typography>
                                            <Typography variant="h6">
                                                Gustavoespassos@gmail.com
                                            </Typography>
                                        </div>
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
                                <Grid container spacing={5} style={{paddingTop: '20%'}}>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Data de nascimento:
                                            </Typography>
                                            <Typography variant="h6">
                                                07/02/2003
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Estado:
                                            </Typography>
                                            <Typography variant="h6">
                                                Distrito Federal - DF
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Gênero:
                                            </Typography>
                                            <Typography variant="h6">
                                                Masculino
                                            </Typography>
                                        </div>
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
                                <Grid container spacing={5} style={{paddingTop: '20%'}}>
                                <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Telefone:
                                            </Typography>
                                            <Typography variant="h6">
                                                Não informado *
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Discord:
                                            </Typography>
                                            <Typography variant="h6">
                                                xXx_ShadowMonstrao_xXx
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Typography variant="h5" sx={{ color: '#16C83D', marginRight: '2%' }}>
                                                Instagram:
                                            </Typography>
                                            <Typography variant="h6">
                                                Não informado *
                                            </Typography>
                                        </div>
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
