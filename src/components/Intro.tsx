import React from "react";
import { Avatar, Box, Link, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import styles from "../styles/Intro.module.scss";

type Props = {};

export const Intro = (props: Props) => {
  return (
    <Stack id="about" spacing={2} className={styles.stackIntro}>
      <Avatar src="" alt="Avatar1" className={styles.avatar} />
      <Typography className={styles.typography1}>
        Im Mălin Mihuț. Developer, football player, creator, photographer,
        whatever.
      </Typography>
      <Typography className={styles.typography2}>
        Im Mălin Mihuț. Developer, football player, creator, photographer,
        whatever.
      </Typography>
      <Box>
        <Link
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/mihutmalin/"
          target="_blank"
          underline="none"
          className={styles.linkSocialMedia}
        >
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link
          rel="noopener noreferrer"
          href="https://www.instagram.com/mmalin7/"
          target="_blank"
          underline="none"
          className={styles.linkSocialMedia}
        >
          <InstagramIcon fontSize="large" />
        </Link>
        <Link
          rel="noopener noreferrer"
          href="https://github.com/mihutmalin"
          target="_blank"
          underline="none"
          className={styles.linkSocialMedia}
        >
          <GitHubIcon fontSize="large" />
        </Link>
      </Box>
    </Stack>
  );
};
