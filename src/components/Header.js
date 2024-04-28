import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import MenuTabs from "./MenuTab";
import UserLogado from "./userLogado";

export const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ height: "12vh", padding: "0.5%", backgroundColor: "#0F021C"}} >

        <Grid container spacing={3} style={{ height: "12vh", margin: '0'}}>
          <Grid item xs style={{textAlign: 'start', paddingLeft: '0'}}>
            <Link to={"/inicio"}>
              <img src="logo.png" alt="logo" />
            </Link>
          </Grid>

          <Grid item xs={7} style={{alignSelf: 'end'}}>
            <MenuTabs />
          </Grid>

          <Grid item xs style={{textAlign: 'center', paddingTop: '0', alignSelf: 'center'}}>
            <Routes>
              <Route exact path="/cadastro" element={
                <Typography component="div">
                  Já tem uma conta?
                  <Link to="/" style={{ color: "white" }}>
                    <Button color="inherit" className="cadastra-cand" sx={{ marginLeft: "1vw", width: "7vw", backgroundColor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }} >
                      Login
                    </Button>
                  </Link>
                </Typography>
              } />

              <Route exact path="/" element={
                <Typography component="div">
                  Não tem uma conta?
                  <Link to="/cadastro" style={{ color: "white" }}>
                    <Button color="inherit" className="cadastra-cand" sx={{ marginLeft: "1vw", width: "7vw", backgroundColor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }} >
                      Cadastrar
                    </Button>
                  </Link>
                </Typography>
              } />

              <Route exact path="/inicio" element={
                <UserLogado />
              } />

            </Routes>
          </Grid>

        </Grid>
      </Toolbar>
    </AppBar >
  );
};

export default CustomAppBar;
