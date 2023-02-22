import { useEffect, useState } from "react";
import { Menu } from "@/components/Menu";
import { Intro } from "@/components/Intro";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Projects } from "@/components/Projects";
import { Box, Button, Stack } from "@mui/material";
import Head from "next/head";

import styles from "../styles/Index.module.scss";

export default function Home() {
  const [lightMode, setLightMode] = useState(false);

  const onClickButtonThemeSwitch = () => {
    if (lightMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setLightMode(!lightMode);
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
        <Button
          className={styles.buttonThemeSwitch}
          onClick={onClickButtonThemeSwitch}
        >
          Switch
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
