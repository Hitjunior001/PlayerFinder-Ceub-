import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputFileUpload from "../../components/fileUpload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Inicio from "../Inicio";

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
  // const [nascimento, setNascimento] = useState("");
  const [estado, setEstado] = useState("");
  const [genero, setGenero] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
  }; //SnackBar

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Usuário: data.get("usuario"),
      Nome: data.get("nome"),
      Email: data.get("email"),
      Senha: data.get("senha"),
      ConfirmaSenha: data.get("confirmaSenha"),
      DataNascimento: data.get("nascimento"),
      Estado: data.get("estado"),
      Gênero: data.get("genero"),
    });

    if (senha !== ConfirmaSenha) {
      setError(
        <Snackbar open={true} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert severity="warning" variant="filled" sx={{ width: "100%" }}>
            As senhas precisam ser iguais!
          </Alert>
        </Snackbar>
      );
      return;
    }

    const res = signup(usuario, nome, email, senha, estado, genero);

    if (res) {
      setError(res);
      return;
    }

    <Snackbar open={true} anchorOrigin={{ vertical: "top", horizontal: "center" }} autoHideDuration={3500} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
        Usuário cadastrado com sucesso!
      </Alert>
    </Snackbar>;
    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  const [cleared, setCleared] = React.useState(false);
  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }); //DatePicker

  const handleChange = (event) => {
    setEstado(event.target.value);
  }; //Select Estado

  const { signed } = useAuth();
  if (signed) {
    return <Inicio />;
  }
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastro
          </Typography>
          <Box component="form" Validate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                <Grid container spacing={4.5}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="senha"
                      label="Senha"
                      type="password"
                      id="senha"
                      value={senha}
                      onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
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
                    <LocalizationProvider
                      dateAdapter={AdapterDayjs}
                      adapterLocale="pt-br"
                      localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
                    >
                      <DatePicker
                        label="Data de nascimento *"
                        name="nascimento"
                        // value={nascimento}
                        // onChange={(e) => [setNascimento(e.target.value), setError("")]}
                        minDate={min}
                        maxDate={max}
                        sx={{ width: "100%" }}
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
                        id="demo-simple-select-helper"
                        value={estado}
                        name="estado"
                        label="Estado"
                        onChange={handleChange}
                      >
                        <MenuItem value="" disabled> <em>Selecione</em> </MenuItem>
                        <MenuItem value={"ac"}> AC - Acre</MenuItem>
                        <MenuItem value={"al"}> AL - Alagoas</MenuItem>
                        <MenuItem value={"ap"}> AP - Amapá</MenuItem>
                        <MenuItem value={"am"}> AM - Amazonas</MenuItem>
                        <MenuItem value={"ba"}> BA - Bahia</MenuItem>
                        <MenuItem value={"ce"}> CE - Ceará</MenuItem>
                        <MenuItem value={"df"}> DF - Distrito Federal</MenuItem>
                        <MenuItem value={"es"}> ES - Espírito Santo</MenuItem>
                        <MenuItem value={"go"}> GO - Goiás</MenuItem>
                        <MenuItem value={"ma"}> MA - Maranhão</MenuItem>
                        <MenuItem value={"mt"}> MT - Mato Grosso</MenuItem>
                        <MenuItem value={"ms"}> MS - Mato Grosso do Sul</MenuItem>
                        <MenuItem value={"mg"}> MG - Minas Geráis</MenuItem>
                        <MenuItem value={"pa"}> PA - Pará</MenuItem>
                        <MenuItem value={"pb"}> PB - Paraíba</MenuItem>
                        <MenuItem value={"pr"}> PR - Paraná</MenuItem>
                        <MenuItem value={"pe"}> PE - Pernambuco</MenuItem>
                        <MenuItem value={"pi"}> PI - Piauí</MenuItem>
                        <MenuItem value={"rj"}> RJ - Rio de Janeiro</MenuItem>
                        <MenuItem value={"rn"}> RN - Rio Grande do Norte</MenuItem>
                        <MenuItem value={"rs"}> RS - Rio Grande do Sul</MenuItem>
                        <MenuItem value={"ro"}> RO - Rondônia</MenuItem>
                        <MenuItem value={"rr"}> RR - Roraima</MenuItem>
                        <MenuItem value={"sc"}> SC - Santa Catarina</MenuItem>
                        <MenuItem value={"sp"}> SP - São Paulo</MenuItem>
                        <MenuItem value={"se"}> SE - Sergipe</MenuItem>
                        <MenuItem value={"to"}> TO - Tocantins</MenuItem>
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
                          label="Prefiro não informar"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </div>

            {error}
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
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Page;