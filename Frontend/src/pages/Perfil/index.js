import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputFileUpload from "../../components/fileUpload";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress"; // Adicionando CircularProgress para indicador de carregamento

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ProfilePage = () => {
  const [editar, setEditar] = useState(false);
  const { user, loading } = useAuth(); 

  const toggleEditar = () => {
    setEditar(!editar);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <AccountCircleIcon style={{ fontSize: "50px", color: "#16C83D" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Meu perfil
          </Typography>

          {loading ? (
            <CircularProgress style={{ color: "#16C83D", marginTop: "20px" }} />
          ) : (
            <>
              {editar ? (
                <Button
                  onClick={toggleEditar}
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: "8vw",
                    color: "white",
                    bgcolor: "#16C83D",
                    "&:hover": { backgroundColor: "#16C83D" },
                  }}
                >
                  Editar
                </Button>
              ) : (
                <Button
                  onClick={toggleEditar}
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: "8vw",
                    color: "white",
                    bgcolor: "#16C83D",
                    "&:hover": { backgroundColor: "#16C83D" },
                  }}
                >
                  Salvar
                </Button>
              )}

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
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <ListItem>
                            <ListItemText
                              sx={{ textAlign: "center", color: "#16C83D", marginRight: "2%" }}
                              primary={"Username:"}
                            />
                            {!editar ? (
                              <TextField label="Username" value={user.username} disabled /> // Alterando para utilizar value ao invés de defaultValue
                            ) : (
                              <Typography variant="h6" sx={{ textAlign: "start" }}>
                                {user.username}
                              </Typography>
                            )}
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              sx={{ textAlign: "center", color: "#16C83D", marginRight: "2%" }}
                              primary={"Nome:"}
                            />
                            {!editar ? (
                              <TextField label="Nome" value={user.nomeCompleto} disabled /> // Alterando para utilizar value ao invés de defaultValue
                            ) : (
                              <Typography variant="h6" sx={{ textAlign: "start" }}>
                                {user.nomeCompleto}
                              </Typography>
                            )}
                          </ListItem>
                          <ListItem>
                            <ListItemText
                              sx={{ textAlign: "center", color: "#16C83D", marginRight: "2%" }}
                              primary={"Email:"}
                            />
                            {!editar ? (
                              <TextField label="Email" value={user.email} disabled /> // Alterando para utilizar value ao invés de defaultValue
                            ) : (
                              <Typography variant="h6" sx={{ textAlign: "start" }}>
                                {user.email}
                              </Typography>
                            )}
                          </ListItem>
                        </div>
                      </Grid>
                    </Grid>
                  </Paper>
                </div>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;
