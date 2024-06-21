import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const theme = createTheme();

export default function App({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");

    localStorage.setItem("theme", mode === "dark" ? "light" : "dark");
  };

  const getDesignTokens = () => ({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            navbar: { main: "#e10000" },

            primary: { main: "#1976D2" },
            secondary: {
              main: "#e10000",
            },
            error: { main: "#e10000" },
            dateInputColor: {
              main: "#000",
            },
          }
        : {
            // palette values for dark mode
            primary: {
              main: "#1976D2",
            },
            secondary: {
              main: "#300000",
            },
            error: { main: "#e10000" },
          }),
    },
    transitions: {
      easing: {
        sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
      },
      duration: {
        enteringScreen: 325,

        leavingScreen: 295,
      },
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const x = localStorage.getItem("theme");
    setMode(x ? x : "light");
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </ThemeProvider>
    </>
  );
}
