import React, { useState, useEffect } from "react";
import { Avatar, Box, Typography, Container, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const UsuariosPorJogo = () => {
  const { jogoId } = useParams(); // Obtém o ID do jogo da URL
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/jogo/usuarios?jogoId=${jogoId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data);
        } else {
          throw new Error("Erro ao buscar usuários do jogo");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários do jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [jogoId]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="md">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <SportsEsportsIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Usuários do Jogo
          </Typography>
          {loading ? (
            <CircularProgress sx={{ mt: 2 }} />
          ) : (
            <Box sx={{ mt: 2, width: '100%' }}>
              <Paper variant="outlined" style={{ padding: "1%", backgroundColor: "#202020", borderRadius: "10px" }}>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Discord</TableCell>
                        <TableCell>Email</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {usuarios.map((usuario) => (
                        <TableRow key={usuario.id}>
                          <TableCell>{usuario.id}</TableCell>
                          <TableCell>{usuario.username}</TableCell>
                          <TableCell>{usuario.discord}</TableCell>
                          <TableCell>{usuario.email}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UsuariosPorJogo;
