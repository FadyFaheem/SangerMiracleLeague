"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f29d16",
    },
    secondary: {
      main: "#552988",
    },
  },
  typography: {
    button: {
      fontWeight: 700,
    },
  },
});

export default theme;
