import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InputFileUpload from "../../components/fileUpload";
import SelectLabelsPais from "../../components/selectInput-Pais";
import SelectLabelsEstado from "../../components/selectInput-Estados";

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
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: "5vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box
            component="form"
            Validate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <div
              style={{ display: "flex", flexDirection: "row", width: "90vw", justifyContent: "center" }}
            >
              <Paper component="div"
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
                    <InputFileUpload />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="family-name"
                      id="User"
                      label="Usuário"
                      name="User"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="given-name"
                      id="Name"
                      label="Nome"
                      name="Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="email"
                      id="email"
                      label="Email"
                      name="email"
                    />
                  </Grid>
                </Grid>
              </Paper>

              <Paper component="div"
                style={{
                  padding: "1%",
                  margin: "1%",
                  width: "30vw",
                  backgroundColor: "#202020",
                  borderRadius: "10px",
                }}
              >
                <Grid container spacing={2} style={{}}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="phone"
                      label="Telefone"
                      name="phone"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="birthday"
                      label="Data de nascimento"
                      name="birthday"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectLabelsPais
                      required
                      fullWidth
                      autoComplete="given-name"
                      id="pais"
                      label="Nacionalidade"
                      name="pais"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <SelectLabelsEstado
                      required
                      fullWidth
                      autoComplete="estado"
                      id="estado"
                      label="Estado"
                      name="estado"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="sexo"
                      id="sexo"
                      label="Sexo"
                      name="sexo"
                    />
                  </Grid>
                </Grid>
              </Paper>
              
              <Paper component="div"
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
                    <TextField
                      fullWidth
                      id="discord"
                      label="Discord"
                      name="discord"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="insta"
                      label="Instagram"
                      name="insta"
                    />
                  </Grid>
                </Grid>
              </Paper>

              {/* <Paper component="div"
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
                    <TextField name="jogo" fullWidth id="jogo" label="Jogo" />
                  </Grid>
                </Grid>
              </Paper> */}
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                width: "20vw",
                bgcolor: "#16C83D",
                "&:hover": { backgroundColor: "#16C83D" },
              }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/login" style={{ color: "#16C83D" }}>
                  Já tem uma conta? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
