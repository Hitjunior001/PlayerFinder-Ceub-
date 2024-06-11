import React, { useState } from "react";
import { Avatar, Button, TextField, Box, Typography, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const EsqueceuSenha = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await resetPassword(email);
      setMessage("Um email de recuperação foi enviado.");
      setLoading(false);
    } catch (err) {
        console.log(err)
      setError("Erro ao enviar email de recuperação. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          marginTop: "10vh",
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
          Esqueceu a Senha
        </Typography>
        
        <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError(""), setMessage("")]}
          />
          <Typography sx={{ marginTop: "1vh", color: "red" }}>{error}</Typography>
          <Typography sx={{ marginTop: "1vh", color: "green" }}>{message}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              bgcolor: "#16C83D",
              "&:hover": { backgroundColor: "#32D35A" },
            }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Enviar Email de Recuperação"}
          </Button>
          <Link to="/login" style={{ color: "#16C83D" }}>
            Voltar ao Login
          </Link>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EsqueceuSenha;
