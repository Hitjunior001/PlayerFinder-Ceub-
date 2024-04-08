import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CustomAppBar } from "./components/Header";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div
          className="App"
          style={{
            minHeight: "100vh",
            height: "100%",
            textAlign: "center",
            backgroundColor: "#202020",
          }}
        >
          <CustomAppBar />
          <Routes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
