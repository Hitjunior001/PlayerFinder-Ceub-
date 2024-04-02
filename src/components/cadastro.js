import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Cadastro() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'white'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#16C83D' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <div style={{ display: 'flex', flexDirection: 'row', width: '90vw' }}>
              <div style={{ padding: '1%', margin: '1%', width: '30vw', backgroundColor: '#303030', borderRadius: '20px'}}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="User"
                      label="Usuário"
                      name="User"
                      autoComplete="family-name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="Name"
                      required
                      fullWidth
                      id="Name"
                      label="Nome"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="phone"
                      label="Telefone"
                      id="phone"
                    />
                  </Grid>
                </Grid>
              </div>

              <div style={{ padding: '1%', margin: '1%', width: '30vw', backgroundColor: '#303030', borderRadius: '20px'}}>
                <Grid container spacing={2}>
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
                    <TextField
                      name="pais"
                      required
                      fullWidth
                      id="pais"
                      label="Nacionalidade"
                      autoComplete="given-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="estado"
                      label="Estado"
                      name="estado"
                      autoComplete="estado"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="discord"
                      label="Discord"
                      id="discord"
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
              </div>
              
              <div style={{ padding: '1%', margin: '1%', width: '30vw', backgroundColor: '#303030', borderRadius: '20px'}}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="jogo"
                      fullWidth
                      id="jogo"
                      label="Jogo"
                    />
                  </Grid>
                </Grid>
              </div>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, width: '20vw', bgcolor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: "#16C83D", textDecorationColor: "#16C83D" }}>
                  Já tem uma conta? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}