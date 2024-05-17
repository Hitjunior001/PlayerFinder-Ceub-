import React from "react";
import { Avatar, Box, Typography, Container, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Page = () => {

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <PeopleAltIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Amigos
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", width: "90vw", alignItems: 'center' }} >
              
              <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Link to="/adicionar-jogo/" style={{textDecoration: 'none', color: 'white'}}>
                  
                </Link>
              </Paper>

            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;