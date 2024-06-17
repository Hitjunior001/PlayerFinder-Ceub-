import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CustomAppBar } from "./components/Header";
import { AuthProvider } from "./contexts/auth";
import { FriendsProvider } from "./contexts/friends";
import { SnackbarProvider } from "./contexts/snackbar"; 



const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <FriendsProvider>
          <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
              <div className="App">
                <CustomAppBar />
                <Routes />
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </FriendsProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
