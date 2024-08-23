import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: `"Arial", "Noto Sans KR",sans-serif`,
    h4: {
      padding: "1rem",
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    h5: {
      padding: "1rem",
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      padding: "16px",
      fontSize: "0.75rem",
      lineHeight: 1.43,
      fontWeight: 400,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            // padding: 0,
          },
        },
      },
    },
  },
});
