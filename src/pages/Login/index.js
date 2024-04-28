import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Page = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Email: data.get("email"),
      Senha: data.get("senha"),
    });

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/inicio");
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
          Login
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
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            id="senha"
            name="senha"
            autoComplete="current-password"
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <FormControlLabel
            control={
              <Checkbox
                value="lembrar"
                color="primary"
                sx={{ color: "#ffff" }}
              />
            }
            label="Manter-me conectado"
          />
          <Typography sx={{marginTop: '1vh', color: 'red'}}>{error}</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              color: "white",
              bgcolor: "#16C83D",
              "&:hover": { backgroundColor: "#16C83D" },
            }}
          >
            LOGAR
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/nova-senha" style={{ color: "#16C83D" }}>
                Esqueceu a senha?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Page;
