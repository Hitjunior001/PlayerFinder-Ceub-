import React, { useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Paper, Alert, Snackbar,
   FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select,
   OutlinedInput, InputAdornment, IconButton, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useNavigate } from "react-router-dom";
import InputFileUpload from "../../components/fileUpload";
import useAuth from "../../hooks/useAuth";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const min = dayjs().add(-100, "year");
const max = dayjs().add(0, "year");

const Page = () => {
  const { signup } = useAuth();

  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ConfirmaSenha, setConfirmaSenha] = useState("");
  const [nascimento, setNascimento] = useState();
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading]= useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
  
    try {
      if (senha !== ConfirmaSenha) {
        setError("As senhas precisam ser iguais!");
        setLoading(false);
        return;
      }
  
      const response = await signup(usuario, nome, email, senha, nascimento, estado, genero);
  
      if (!response) {
        throw new Error("Erro ao cadastrar usuário: resposta inválida");
      }
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erro ao cadastrar usuário: ${errorMessage}`);
      }
  
      setLoading(false);
      setSuccess("Usuário cadastrado com sucesso!");
  
      setTimeout(() => {
        navigate("/login");
      }, 3500);
    } catch (error) {
      setError(error.message);
      console.error("Erro ao cadastrar usuário:", error);
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; // Mostrar Senha

  const [cleared, setCleared] = useState(false);
  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]); // DatePicker

  const handleChange = (event) => {
    setEstado(event.target.value);
  }; // Select Estado

  const handleDateChange = (date) => {
    if (date && date.isValid()) {
      setNascimento(date.format("YYYY-MM-DD"));
    } else {
      setNascimento(null);
    }
    setError("");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <Box sx={{ marginTop: "2vh", display: "flex", flexDirection: "column", alignItems: "center", color: "white", }} >
          <Avatar sx={{ m: 1, bgcolor: "#16C83D" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>

          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div style={{ display: "flex", flexDirection: "row", width: "90vw", justifyContent: "center", }} >
              <Paper component="div" style={{ padding: "1%", margin: "1%", width: "30vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <InputFileUpload />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="given-name"
                      id="usuario"
                      label="Usuário"
                      name="usuario"
                      autoFocus
                      value={usuario}
                      onChange={(e) => [setUsuario(e.target.value), setError("")]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="name"
                      id="nome"
                      label="Nome"
                      name="nome"
                      value={nome}
                      onChange={(e) => [setNome(e.target.value), setError("")]}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      autoComplete="email"
                      id="email"
                      label="Email"
                      name="email"
                      value={email}
                      onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                  </Grid>
                </Grid>
              </Paper>

              <Paper component="div" style={{ padding: "1%", margin: "1%", width: "30vw", backgroundColor: "#202020", borderRadius: "10px", }} >
                <Grid container spacing={4.5}>
                  <Grid item xs={12}>
                    <FormControl sx={{ width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="senha">Senha *</InputLabel>
                      <OutlinedInput
                        required
                        name="senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}  
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Mostrar senha"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Senha"
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="confirmaSenha"
                      label="Confirmar senha"
                      type="password"
                      id="confirmaSenha"
                      value={ConfirmaSenha}
                      onChange={(e) => [setConfirmaSenha(e.target.value), setError("")]}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="pt-br" localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText} >
                      <DatePicker
                        label="Data de nascimento *"
                        value={dayjs(nascimento)}
                        onChange={handleDateChange}
                        minDate={min}
                        maxDate={max}
                        sx={{ width: "100%" }}
                        name="nascimento"
                        slotProps={{
                          field: {
                            clearable: true,
                            onClear: () => setCleared(true),
                          },
                        }}
                      />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel id="label-select-input">Estado *</InputLabel>
                      <Select
                        required
                        labelId="label-select-input"
                        value={estado}
                        name="estado"
                        label="Estado"
                        onChange={handleChange}
                      >
                        <MenuItem value={"AC - Acre"}> AC - Acre</MenuItem>
                        <MenuItem value={"AL - Alagoas"}> AL - Alagoas</MenuItem>
                        <MenuItem value={"AP - Amapá"}> AP - Amapá</MenuItem>
                        <MenuItem value={"AM - Amazonas"}> AM - Amazonas</MenuItem>
                        <MenuItem value={"BA - Bahia"}> BA - Bahia</MenuItem>
                        <MenuItem value={"CE - Ceará"}> CE - Ceará</MenuItem>
                        <MenuItem value={"DF - Distrito Federal"}> DF - Distrito Federal</MenuItem>
                        <MenuItem value={"ES - Espírito Santo"}> ES - Espírito Santo</MenuItem>
                        <MenuItem value={"GO - Goiás"}> GO - Goiás</MenuItem>
                        <MenuItem value={"MA - Maranhão"}> MA - Maranhão</MenuItem>
                        <MenuItem value={"MT - Mato Grosso"}> MT - Mato Grosso</MenuItem>
                        <MenuItem value={"MS - Mato Grosso do Sul"}> MS - Mato Grosso do Sul</MenuItem>
                        <MenuItem value={"MG - Minas Geráis"}> MG - Minas Geráis</MenuItem>
                        <MenuItem value={"PA - Pará"}> PA - Pará</MenuItem>
                        <MenuItem value={"PB - Paraíba"}> PB - Paraíba</MenuItem>
                        <MenuItem value={"PR - Paraná"}> PR - Paraná</MenuItem>
                        <MenuItem value={"PE - Pernambuco"}> PE - Pernambuco</MenuItem>
                        <MenuItem value={"PI - Piauí"}> PI - Piauí</MenuItem>
                        <MenuItem value={"RJ - Rio de Janeiro"}> RJ - Rio de Janeiro</MenuItem>
                        <MenuItem value={"RN - Rio Grande do Norte"}> RN - Rio Grande do Norte</MenuItem>
                        <MenuItem value={"RS - Rio Grande do Sul"}> RS - Rio Grande do Sul</MenuItem>
                        <MenuItem value={"RO - Rondônia"}> RO - Rondônia</MenuItem>
                        <MenuItem value={"RR - Roraima"}> RR - Roraima</MenuItem>
                        <MenuItem value={"SC - Santa Catarina"}> SC - Santa Catarina</MenuItem>
                        <MenuItem value={"SP - São Paulo"}> SP - São Paulo</MenuItem>
                        <MenuItem value={"SE - Sergipe"}> SE - Sergipe</MenuItem>
                        <MenuItem value={"TO - Tocantins"}> TO - Tocantins</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Gênero
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={genero}
                        onChange={(e) => [setGenero(e.target.value), setError("")]}
                      >
                        <FormControlLabel
                          required
                          value="masculino"
                          name="genero"
                          control={<Radio />}
                          label="Masculino"
                        />
                        <FormControlLabel
                          required
                          value="feminino"
                          name="genero"
                          control={<Radio />}
                          label="Feminino"
                        />
                        <FormControlLabel
                          required
                          value="outro"
                          name="genero"
                          control={<Radio />}
                          label="Outro"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </div>

            <Snackbar open={!!error || !!success} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} autoHideDuration={3500} onClose={() => {setError(""); setSuccess("");}}>
              <Alert onClose={() => {setError(""); setSuccess("");}} severity={error ? "error" : "success"} variant="filled" sx={{ width: "100%" }}>
                {error || success}
              </Alert>
            </Snackbar>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, width: '20vw', color: 'white', bgcolor: '#16C83D', "&:hover": { backgroundColor: "#32D35A" }, }} disabled={loading}>
              {loading ? <CircularProgress size={24} color="inherit" /> : "Cadastrar"}
            </Button> 
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;