import { useEffect, useState } from "react";
import { Menu } from "@/components/Menu";
import { Intro } from "@/components/Intro";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Projects } from "@/components/Projects";
import { Button, Stack } from "@mui/material";
import Head from "next/head";

import styles from "../styles/Index.module.scss";

export default function Home() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const theme = localStorage.getItem("data-theme");
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      setTheme(theme)
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const onClickButtonThemeSwitch = () => {
    const theme = localStorage.getItem("data-theme");
    if (!theme || theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("data-theme", "light");
      setTheme("light");
    }
  };

  return (
    <>
      <Head>
        <title>Mălin Mihuț</title>
        <meta name="description" content="Website @mihutmalin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack className={styles.stackIndex}>
        <Button className={styles.buttonThemeSwitch} onClick={onClickButtonThemeSwitch}>
          {theme === "dark" ? "Dark mode" : "Light mode"}
        </Button>
        <Menu />
        <Intro />
        <Gallery />
        <Projects />
        <Footer />
      </Stack>
    </>
  );
}
