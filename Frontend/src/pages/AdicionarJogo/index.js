import React from "react";
import { Avatar, Box, Typography, Container, Paper, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import valorant from "../../components/images/valorant.png";
import  CS2 from "../../components/images/CS2.png";
import leagueOfLegends from "../../components/images/leagueOfLegends.jpg";

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
            <AddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Adicionar jogo
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", width: "90vw", alignItems: 'center' }} >
              
              <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Link to="/adicionar-jogo/valorant" style={{textDecoration: 'none', color: 'white'}}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
                      <CardMedia component="img" height="150" image={valorant} alt="jogos" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'inline'}}>
                          Adicionar jogo 
                        </Typography>
                        <AddIcon fontSize="large"/>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Paper>
              
              <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Link to="/adicionar-jogo/" style={{textDecoration: 'none', color: 'white'}}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
                      <CardMedia component="img" height="150" image={CS2} alt="jogos" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'inline'}}>
                          Adicionar jogo 
                        </Typography>
                        <AddIcon fontSize="large"/>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Paper>
              
              <Paper component="div" style={{ padding: "0.5%", margin: "1%", width: "70vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Link to="/adicionar-jogo/" style={{textDecoration: 'none', color: 'white'}}>
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
                      <CardMedia component="img" height="150" image={leagueOfLegends} alt="jogos" />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{display: 'inline'}}>
                          Adicionar jogo 
                        </Typography>
                        <AddIcon fontSize="large"/>
                      </CardContent>
                    </CardActionArea>
                  </Card>
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