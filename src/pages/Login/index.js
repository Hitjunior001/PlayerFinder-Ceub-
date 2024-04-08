import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Page = () => {

  const [data, setData] = useState({
    senha: '',
    email: ''
  });

  const valueInput = (event) => setData({ ...data, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ Email: data.email, Senha: data.senha });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          marginTop: '10vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: "white",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#16C83D' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          Validate
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email"
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={valueInput}
            value={data.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Senha"
            id="sennha"
            name="senha"
            type="password"
            autoComplete="current-password"
            onChange={valueInput}
            value={data.senha}
          />
          <FormControlLabel
            control={<Checkbox value="lembrar" color="primary" sx={{ color: "#ffff" }} />}
            label="Manter-me conectado"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }}
          >
            LOGAR
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/nova-senha" style={{ color: "#16C83D" }}>
                Esqueceu a senha?
              </Link>
            </Grid>
            {/* <Grid item>
                    <Link to="/login" variant="body2">
                      {"Não tem uma conta? Cadastre-se"}
                    </Link>
                  </Grid> */}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Page;