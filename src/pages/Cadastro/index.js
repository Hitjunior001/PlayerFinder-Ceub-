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
import InputFileUpload from "../../components/fileUpload";
import SelectLabelsEstado from "../../components/selectInput-Estados";
import { RadioButtonsSexo } from "../../components/radio-btns-Sexo";
import BasicDatePicker from "../../components/datePicker";

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
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
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
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <InputFileUpload />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="family-name"
                      id="usuario"
                      label="Usuário"
                      name="usuario"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="given-name"
                      id="nome"
                      label="Nome"
                      name="nome"
                    />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
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
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <TextField
                      required
                      fullWidth
                      name="senha"
                      label="Senha"
                      type="password"
                      id="senha"
                    />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <TextField
                      required
                      fullWidth
                      name="confirmaSenha"
                      label="Confirmar senha"
                      type="password"
                      id="confirmaSenha"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <BasicDatePicker />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <TextField
                      required
                      fullWidth
                      id="telefone"
                      label="Telefone"
                      name="telefone"
                    />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <SelectLabelsEstado />
                  </Grid>
                  <Grid item xs={12} style={{paddingTop: '24px'}}>
                    <RadioButtonsSexo />
                  </Grid>
                </Grid>
              </Paper>

              {/* <Paper
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
