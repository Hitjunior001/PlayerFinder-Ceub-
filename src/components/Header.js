import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const CustomAppBar = () => {
 return (
    <AppBar position="static">
      <Toolbar style={{height:"13vh", backgroundColor:"#202020"}}>
        <img src="logo.png" alt="logo"/>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Busca de Candidatos
        </Typography>
        <a href='' style={{color:"white"}}><Button color="inherit" className='cadastra-cand' style={{ textDecoration:"underline"}}>Cadastrar candidato</Button></a>
      </Toolbar>
    </AppBar>
 )
};