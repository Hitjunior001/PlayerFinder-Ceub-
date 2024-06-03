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
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const FilterPerGame = ({ jogoId, atributos = [], setLoading, loading }) => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
    console.log(filters)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(filters);
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
};

export default FilterPerGame;
