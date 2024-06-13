import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Box,
  Typography,
  Container,
  Paper,
  CircularProgress,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Drawer
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const FilterPerGame = ({ jogoId, atributos = [], setLoading, loading, filtersUsers, setFiltersUsers }) => {
  const [filters, setFilters] = useState({ username: "" });

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(filters);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:8080/jogo/filter/usuario?jogoId=${jogoId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(filters)
      });

      if (response.ok) {
        console.log("Perfil de jogo filtrado com sucesso!");
        const data = await response.json();
        setFiltersUsers(data)

      } else {
        throw new Error("Erro ao filtrar perfil de jogo");
      }
    } catch (error) {
      console.error("Erro ao filtrar perfil de jogo:", error);
    } finally {
    }
  };

  const groupedAttributes = atributos.reduce((acc, curr) => {
    if (!acc[curr.titulo]) {
      acc[curr.titulo] = [];
    }
    acc[curr.titulo].push(curr);
    return acc;
  }, {});

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
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
          <Typography component="h1" variant="h5">
            Filtrar Jogo
          </Typography>
          {loading ? (
            <CircularProgress sx={{ mt: 2 }} />
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "20vw",
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
                  <FormControl sx={{ minWidth: "100%" }}>
                    <InputLabel htmlFor="username-input">Nome de Usuário</InputLabel>
                    <Input
                      id="username-input"
                      name="username"
                      value={filters.username}
                      onChange={handleFilterChange}
                      style={{
                        marginBottom:"15px"
                      }}
                    />
                  </FormControl>
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
                            value={filters[titulo] || ""}
                            onChange={handleFilterChange}
                          >
                            {groupedAttributes[titulo].map((attr) => (
                              <MenuItem key={attr.value} value={attr.value}>
                                {attr.value}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "20vw",
                  color: "white",
                  bgcolor: "#16C83D",
                  "&:hover": { backgroundColor: "#16C83D" },
                }}
              >
                Filtrar
              </Button>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} style={{ color: 'white', backgroundColor: '#16C83D' }}>Filtros</Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default FilterPerGame;
