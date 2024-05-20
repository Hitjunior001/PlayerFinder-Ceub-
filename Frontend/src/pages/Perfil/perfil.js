import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Perfil = () => {
  const { user } = useAuth();
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
          <Typography component="h1" variant="h5">
            Perfil
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : error ? (
              <Typography variant="body1" color="error">
                Error loading profile: {error.message}
              </Typography>
            ) : (
              <>
                <Typography variant="h6">{perfilData.username}</Typography>
                <Typography variant="body1">{perfilData.email}</Typography>
                <Typography variant="body1">{perfilData.nomeCompleto}</Typography>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Perfil;
