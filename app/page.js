import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./NavBar";
import { ThemeOptions } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <NavBar />
      </main>
    </ThemeProvider>
  );
}
