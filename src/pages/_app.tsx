import React, { useState, useEffect, useRef } from "react";
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import "../styles/globals.css";
import Head from "next/head";
import ScrollBar from "smooth-scroll";

const MyApp = ({ Component, pageProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(true);
  const theme = darkMode.value ? darkTheme : lightTheme;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          href={`https://fonts.googleapis.com/css2?family=Oxygen:wght@300&display=swap`}
          rel="stylesheet"
        />
      </Head>

      <div style={{ position: "absolute", right: "0" }}>
        <button onClick={darkMode.enable}>DARK MODE</button>
        <button onClick={darkMode.disable}>LIGHT MODE</button>
      </div>

      {isMounted && <Component {...pageProps} theme={theme} />}
    </ThemeProvider>
  );
};

export default MyApp;
