import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputFileUpload from "../../components/fileUpload";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress"; 
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ProfilePage = () => {
  const { user, loading, updateUser, deleteUser } = useAuth(); 
  const [editar, setEditar] = useState(true);
  const [userData, setUserData] = useState({
    nomeCompleto: user.nomeCompleto,
    email: user.email,
    imagemPerfil: user.imagemPerfil,
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [DeleteAccountOpen, setDeleteAccountOpen] = React.useState(false);

  useEffect(() => {
    if (!loading) {
      setUserData({
        nomeCompleto: user.nomeCompleto,
        email: user.email,
        imagemPerfil: user.imagemPerfil,
      });
    }
  }, [user, loading]);

  const toggleEditar = () => {
    setEditar(!editar);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedUser = await updateUser(userData);
      if (updatedUser) {
        setSnackbarOpen(true);
        setSnackbarSeverity("success");
        setSnackbarMessage("Perfil atualizado com sucesso!");
      } else {
        setSnackbarOpen(true);
        setSnackbarSeverity("error");
        setSnackbarMessage("Falha ao atualizar perfil.");
      }
    } catch (error) {
      setSnackbarOpen(true);
      setSnackbarSeverity("error");
      setSnackbarMessage(`Erro ao atualizar perfil: ${error.message}`);
    }
    toggleEditar();
  };
  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  }; //Snackbar


  const handleClickOpenDeleteDialog = () => {
    setDeleteAccountOpen(true);
  };
  const handleCloseDeleteDialog = () => {
    setDeleteAccountOpen(false);
  };

  const handleDeleteUser = async () => {
    const confirmDelete = true;
    if (confirmDelete) {
      setSnackbarOpen(true);
      const deleted = await deleteUser();
      if (deleted) {
        console.log("Conta deletada com sucesso!");
        setSnackbarOpen(true);
        setSnackbarSeverity("success");
        setSnackbarMessage("Perfil Deletado com sucesso!");

      } else {
        console.error("Falha ao deletar conta.");
        setSnackbarOpen(true);
        setSnackbarSeverity("error");
        setSnackbarMessage("Falha ao deletar o perfil.");
      }
    }
    setTimeout(() => {
      handleCloseDeleteDialog()
    }, 3500);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

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
          <Avatar sx={{ m: 1, bgcolor: "inherit" }}>
            <AccountCircleIcon style={{ fontSize: "50px", color: "#16C83D" }} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Meu perfil
          </Typography>

          {loading ? (
            <CircularProgress style={{ color: "#16C83D", marginTop: "20px" }} />
          ) : (
            <>
              <Button
                onClick={editar ? toggleEditar : handleSubmit}
                variant="contained"
                sx={{ mt: 3, width: "8vw", color: "white", bgcolor: "#16C83D", "&:hover": { backgroundColor: "#16C83D" } }}
              >
                {editar ? "Editar" : "Salvar"}
              </Button>

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
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <Grid item xs={12} >
                          <ListItemText sx={{ color: "#16C83D", paddingRight: "2vw", textAlign: 'start', }} primary="Usuário:"/>
                          <TextField fullWidth value={user.username} onChange={handleChange} 
                            InputProps={{readOnly: true}}
                            variant={"standard"} 
                            disabled={editar ? false : true}
                          />
                        </Grid>

                        <Grid item xs={12} >
                          <ListItemText sx={{ color: "#16C83D", paddingRight: "2vw", paddingTop: editar ?  '3vh' : '1.5vh', textAlign: 'start', }} primary="Nome:"/>
                          <TextField fullWidth required autoComplete="name" name="nomeCompleto" value={userData.nomeCompleto} onChange={handleChange} 
                            InputProps={{readOnly: editar ? true : false}}
                            variant={editar ? "standard" : "outlined"} 
                          />
                        </Grid>

                        <Grid item xs={12} >
                          <ListItemText sx={{ color: "#16C83D", paddingRight: "2vw", paddingTop: editar ?  '3vh' : '1.5vh', textAlign: 'start', }} primary="Email:"/>
                          <TextField fullWidth required autoComplete="email" name="email" value={userData.email} onChange={handleChange} 
                            InputProps={{readOnly: editar ? true : false}}
                            variant={editar ? "standard" : "outlined"} 
                          />
                        </Grid>
                      </div>
                      </Grid>
                      <Snackbar open={snackbarOpen} autoHideDuration={3500} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                          {snackbarMessage}
                        </Alert>
                      </Snackbar>
                    </Grid>
                  </Paper>
                </div>

                <Dialog open={DeleteAccountOpen} onClose={handleCloseDeleteDialog} aria-labelledby="delet-dialog" aria-describedby="dialog-description" >
                  <DialogTitle id="delet-dialog">
                    Deseja realmente deletar sua conta?
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="dialog-description">
                      Clicando em SIM, sua conta será excluída dos nossos registros. <br/> Deseja prosseguir?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseDeleteDialog}> Não </Button>
                    <Button onClick={handleDeleteUser} autoFocus> Sim </Button>
                  </DialogActions>
                </Dialog>

                <Button
                  onClick={handleClickOpenDeleteDialog}
                  variant="contained"
                  color="error"
                  sx={{ width: "10vw", color: "white", "&:hover": { backgroundColor: "#FF0000" } }}
                >
                  Deletar Conta
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ProfilePage;