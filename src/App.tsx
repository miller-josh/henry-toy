import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import theme from "./shared/theme";
import router from "./router";

const App: React.FC = () => {
  return (
    // TODO: remove strict before deployment
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
