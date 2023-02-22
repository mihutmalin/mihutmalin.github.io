import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";

import styles from "../styles/Menu.module.scss";

type Props = {};

export const Menu = (props: Props) => {
  const onClickButtonMenu = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box className={styles.boxMenu}>
      <ButtonGroup
        variant="contained"
        aria-label="primary button group"
        className={styles.buttonGroup}
      >
        <Button
          className={styles.button}
          onClick={() => onClickButtonMenu("about")}
        >
          About
        </Button>
        <Button
          className={styles.button}
          onClick={() => onClickButtonMenu("projects")}
        >
          Projects
        </Button>
      </ButtonGroup>
    </Box>
  );
};
