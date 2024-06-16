import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#00836C",
    },
    secondary: {
      main: grey.A700,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
