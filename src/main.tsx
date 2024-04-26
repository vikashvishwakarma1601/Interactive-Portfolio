import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { theme } from "./theme";
import GlobalStyles from "./styles";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </>
);
