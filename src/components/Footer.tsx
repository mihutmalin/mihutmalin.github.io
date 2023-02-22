import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import styles from "../styles/Footer.module.scss";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Box className={styles.boxFooter}>
      <ButtonGroup
        variant="contained"
        aria-label="primary button group"
        className={styles.buttonGroup}
      >
        <Button className={styles.button}>About</Button>
        <Button className={styles.button}>Projects</Button>
      </ButtonGroup>
      <Typography className={styles.typography}>
        © 2023 Mălin Mihuț. All rights reserved.
      </Typography>
    </Box>
  );
};
