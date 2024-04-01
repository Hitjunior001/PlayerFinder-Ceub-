import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const CustomAppBar = () => {
 return (
    <AppBar position="static">
      <Toolbar style={{height:"15vh", padding:"5px", paddingLeft:"50px", paddingRight:"50px", backgroundColor:"#0F021C"}}>
          <img src="logo.png" alt="logo"/>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Cadastro do usuário
        </Typography>
        <Typography component="div" sx={{ textDecoration:"underline"}}>
          Não tem uma conta?
          <Button color="inherit" className='cadastra-cand' sx={{ marginLeft:"1vw", width:"7vw", backgroundColor:"#16C83D", "&:hover":{backgroundColor:"#16C83D"} }}>Cadastrar</Button>
        </Typography>
      </Toolbar>
    </AppBar>
 )
};