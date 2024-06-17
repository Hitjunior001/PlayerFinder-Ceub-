import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Box,
  Container,
  Paper,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Input,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { useSnackbar } from "../contexts/snackbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const CreatePerfilGameForm = ({ jogoId, atributos = [], setLoading, loading, selectedAttributes, setSelectedAttributes,username,setUsername }) => {

  const showSnackbar = useSnackbar();


  const handleCreateProfile = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/jogo/perfil`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          jogoId: jogoId.toString(),
          attributeIds: Object.values(selectedAttributes).toString(),
          username: username
        })
      });

      if (response.ok) {
        setSelectedAttributes({});
        setUsername('');
      } else {
        console.log(response.text, response.message)
        throw new Error("Erro ao criar perfil de jogo");
      }
    } catch (error) {
      console.error("Erro ao criar perfil de jogo:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    setSelectedAttributes({ ...selectedAttributes, [event.target.name]: event.target.value });
  };

  const groupedAttributes = atributos.reduce((acc, curr) => {
    if (!acc[curr.titulo]) {
      acc[curr.titulo] = [];
    }
    acc[curr.titulo].push(curr);
    return acc;
  }, {});

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: "2vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <SportsEsportsIcon />
          </Avatar>
          {loading ? (
            <CircularProgress sx={{ mt: 2 }} />
          ) : (
            <Box component="form" sx={{ mt: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "90vw",
                  justifyContent: "center",
                }}
              >
                <Paper
                  component="div"
                  style={{
                    padding: "1%",
                    margin: "1%",
                    width: "30vw",
                    backgroundColor: "#202020",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container spacing={3}>
                    {Object.keys(groupedAttributes).map((titulo) => (
                      <Grid item xs={12} key={titulo}>
                        <FormControl sx={{ minWidth: "100%" }}>
                          <InputLabel id={`${titulo}-label`}>
                            {titulo}
                          </InputLabel>
                          <Select
                            labelId={`${titulo}-label`}
                            name={titulo}
                            value={selectedAttributes[titulo] || ""}
                            onChange={handleFilterChange}
                          >
                            {groupedAttributes[titulo].map((attr) => (
                              <MenuItem key={attr.id} value={attr.id}>
                                {attr.value}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                    <Grid item xs={12}>
                      <FormControl sx={{ minWidth: "100%" }}>
                        <InputLabel htmlFor="username-input">Nome de Usuário</InputLabel>
                        <Input
                          id="username-input"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Paper>
              </div>
              <Button
                variant="contained"
                color="primary"
                // disabled={!Object.keys(selectedAttributes).length || !username || loading}
                onClick={handleCreateProfile}
                style={{ marginTop: "1%" }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : "Criar Perfil de Jogo"}
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreatePerfilGameForm;
