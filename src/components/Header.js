import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const CustomAppBar = () => {
  return (
    <AppBar position="static">
        <Toolbar style={{ height: "15vh", padding: "5px", paddingLeft: "50px", paddingRight: "50px", backgroundColor: "#0F021C" }}>
          <img src="logo.png" alt="logo"/>

            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Início
            </Typography>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Jogos
            </Typography>

          <Typography component="div" sx={{ textDecoration: "underline" }}>
            Não tem uma conta?
            <Link to="/cadastro" style={{ color: 'white' }}>
              <Button color="inherit" className='cadastra-cand' sx={{ marginLeft: "1vw", width: "7vw", backgroundColor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }}>Cadastrar</Button>
            </Link>
          </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;