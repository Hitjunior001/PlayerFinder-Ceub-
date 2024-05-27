import React, { useState, useEffect } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Paper, Alert, Snackbar,
  FormControl, InputLabel, MenuItem, Select, Divider, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const UsuariosPorJogo = () => {
  const { jogoId } = useParams(); // Obtém o ID do jogo da URL
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [funcao, setFuncao] = useState("");
  const [campeao, setCampeao] = useState("");
  const [rank, setRank] = useState("");
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
        jogo cadastrado com sucesso!
      </Alert>
    </Snackbar>;
    alert("Jogo cadastrado com sucesso!");
    navigate("/jogos/valorant");
  };

  const handleChangeFuncao = (event) => {
    setFuncao(event.target.value);
  };
  const handleChangeCampeao = (event) => {
    setCampeao(event.target.value);
  };
  const handleChangeRank = (event) => {
    setRank(event.target.value);
  };

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`http://localhost:8080/jogo/usuarios?jogoId=${jogoId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data);
        } else {
          throw new Error("Erro ao buscar usuários do jogo");
        }
      } catch (error) {
        console.error("Erro ao buscar usuários do jogo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsuarios();
  }, [jogoId]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <SportsEsportsIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Valorant
          </Typography>
          {loading ? (
            <CircularProgress sx={{ mt: 2 }} />
          ) : (
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div style={{  display: "flex", flexDirection: "row", width: "90vw", justifyContent: "center", }} >
              <Paper component="div" style={{ padding: "1%", margin: "1%", width: "30vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Grid container spacing={3}>

                  <Grid item xs={12}>
                    <TextField
                      autoFocus
                      required
                      fullWidth
                      label="Username & Tag"
                      value={usuarios}
                      onChange={(e) => [setUsuarios(e.target.value)]}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel id="label-select-input">Função *</InputLabel>
                      <Select
                        required
                        labelId="label-select-input"
                        label="Função"
                        value={funcao}
                        onChange={handleChangeFuncao}
                      >
                        <MenuItem value={"duelista"}> Duelista </MenuItem>
                        <MenuItem value={"smoke"}> Smoke </MenuItem>
                        <MenuItem value={"controlador"}> Controlador </MenuItem>
                        <MenuItem value={"sentinela"}> Sentinela </MenuItem>
                        <MenuItem value={"iniciador"}> Iniciador </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel id="label-select-input">Campeão *</InputLabel>
                      <Select
                        required
                        labelId="label-select-input"
                        label="Campeão"
                        value={campeao}
                        onChange={handleChangeCampeao}
                      >
                        <MenuItem value={"jett"}>Jett</MenuItem>
                        <MenuItem value={"phoenix"}>Phoenix</MenuItem>
                        <MenuItem value={"raze"}>Raze</MenuItem>
                        <MenuItem value={"reyna"}>Reyna</MenuItem>
                        <MenuItem value={"yoru"}>Yoru</MenuItem>
                        <MenuItem value={"killjoy"}>Killjoy</MenuItem>
                        <MenuItem value={"cypher"}>Cypher</MenuItem>
                        <MenuItem value={"sage"}>Sage</MenuItem>
                        <MenuItem value={"brimstone"}>Brimstone</MenuItem>
                        <MenuItem value={"omen"}>Omen</MenuItem>
                        <MenuItem value={"viper"}>Viper</MenuItem>
                        <MenuItem value={"astra"}>Astra</MenuItem>
                        <MenuItem value={"breach"}>Breach</MenuItem>
                        <MenuItem value={"skye"}>Skye</MenuItem>
                        <MenuItem value={"sova"}>Sova</MenuItem>
                        <MenuItem value={"kayo"}>KAY/O</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel id="label-select-input">Rank *</InputLabel>
                      <Select
                        required
                        labelId="label-select-input"
                        label="Rank"
                        value={rank}
                        onChange={handleChangeRank}
                      >
                        <MenuItem value={"ferro 1"}>Ferro 1</MenuItem>
                        <MenuItem value={"ferro 2"}>Ferro 2</MenuItem>
                        <MenuItem value={"ferro 3"}>Ferro 3</MenuItem>
                        <MenuItem value={"ferro 4"}>Ferro 4</MenuItem>
                        <Divider />
                        <MenuItem value={"bronze 1"}>Bronze 1</MenuItem>
                        <MenuItem value={"bronze 2"}>Bronze 2</MenuItem>
                        <MenuItem value={"bronze 3"}>Bronze 3</MenuItem>
                        <MenuItem value={"bronze 4"}>Bronze 4</MenuItem>
                        <Divider />
                        <MenuItem value={"prata 1"}>Prata 1</MenuItem>
                        <MenuItem value={"prata 2"}>Prata 2</MenuItem>
                        <MenuItem value={"prata 3"}>Prata 3</MenuItem>
                        <MenuItem value={"prata 4"}>Prata 4</MenuItem>
                        <Divider />
                        <MenuItem value={"ouro 1"}>Ouro 1</MenuItem>
                        <MenuItem value={"ouro 2"}>Ouro 2</MenuItem>
                        <MenuItem value={"ouro 3"}>Ouro 3</MenuItem>
                        <MenuItem value={"ouro 4"}>Ouro 4</MenuItem>
                        <Divider />
                        <MenuItem value={"platina 1"}>Platina 1</MenuItem>
                        <MenuItem value={"platina 2"}>Platina 2</MenuItem>
                        <MenuItem value={"platina 3"}>Platina 3</MenuItem>
                        <MenuItem value={"platina 4"}>Platina 4</MenuItem>
                        <Divider />
                        <MenuItem value={"diamante 1"}>Diamante 1</MenuItem>
                        <MenuItem value={"diamante 2"}>Diamante 2</MenuItem>
                        <MenuItem value={"diamante 3"}>Diamante 3</MenuItem>
                        <MenuItem value={"diamante 4"}>Diamante 4</MenuItem>
                        <Divider />
                        <MenuItem value={"imortal 1"}>Imortal 1</MenuItem>
                        <MenuItem value={"imortal 2"}>Imortal 2</MenuItem>
                        <MenuItem value={"imortal 3"}>Imortal 3</MenuItem>
                        <Divider />
                        <MenuItem value={"radiante"}>Radiante</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                </Grid>
              </Paper>
            </div>

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2,  width: "20vw", color: "white", bgcolor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" }, }} >
              Adicionar
            </Button>
          </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default UsuariosPorJogo;