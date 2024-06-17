import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, CircularProgress, Grid, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useParams } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Perfil = () => {
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [perfilData, setPerfilData] = useState(null);
  const [error, setError] = useState(null);
  const api = "http://localhost:8080"

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${api}/perfil/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao carregar perfil");
        }

        const data = await response.json();
        setPerfilData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProfile();
  }, [username]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <PeopleAltIcon />
          </Avatar>
          <Box component="div" sx={{ mt: 1 }}>
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : error ? (
              <Typography variant="body1" color="error">
                Error loading profile: {error.message}
              </Typography>
            ) : (
              <>
                <Typography component="h1" variant="h4">
                  Perfil de <br/>{perfilData.username}
                </Typography>
                <div style={{ display: "flex", flexDirection: "row", width: "90vw", justifyContent: "center", }} >
                  <Paper component="div" style={{ padding: "1%", margin: "1%", width: "30vw",  backgroundColor: "#202020", borderRadius: "10px", }} >
                    <Grid container spacing={3}>
                      
                      <Grid item xs={12}>
                        <Grid container spacing={1} columns={1} style={{textAlign: '-webkit-center'}}>
                          <Grid item xs={8}>
                              <Avatar src="/broken-image.jpg" style={{ width: '150px', height: '150px'}}/>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12}>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                          <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography sx={{ ml: 5, fontSize: '25px', color: '#16C83D' }}>
                              Nome:
                            </Typography>
                            <Typography sx={{ mr: 10, mb: 3, fontSize: '25px', color: 'white' }}>
                              {perfilData.nomeCompleto}
                            </Typography>
                          </Grid>

                          <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography sx={{ ml: 5, fontSize: '25px', color: '#16C83D' }}                                >
                              Data de aniversário:
                            </Typography>
                            <Typography sx={{ mr: 10, mb: 3,  fontSize: '25px', color: 'white' }}>
                              {perfilData.dataNascimento}
                            </Typography>
                          </Grid>

                          <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography sx={{ ml: 5, fontSize: '25px', color: '#16C83D' }}                                >
                              Estado:
                            </Typography>
                            <Typography sx={{ mr: 10, mb: 3,  fontSize: '25px', color: 'white' }}>
                              {perfilData.estado}
                            </Typography>
                          </Grid>

                          <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography sx={{ ml: 5, fontSize: '25px', color: '#16C83D' }}                                >
                              Gênero:
                            </Typography>
                            <Typography sx={{ mr: 10, mb: 3,  fontSize: '25px', color: 'white' }}>
                              {perfilData.genero}
                            </Typography>
                          </Grid>

                          <Grid item sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Typography sx={{ ml: 5, fontSize: '25px', color: '#16C83D' }}                                >
                              Telefone:
                            </Typography>
                            <Typography sx={{ mr: 10, mb: 3,  fontSize: '25px', color: 'white' }}>
                              {perfilData.telefone}
                            </Typography>
                          </Grid>
                        </div>
                      </Grid>

                    </Grid>
                  </Paper>

                </div>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Perfil;
