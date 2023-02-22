import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

import styles from "../styles/Projects.module.scss";

type Props = {};

export const Projects = (props: Props) => {
  const ProjectCard = () => {
    return (
      <Grid item xs={4}>
        <Card className={styles.cardProject}>
          <CardActionArea
            rel="noopener noreferrer"
            href="https://github.com/mihutmalin"
            target="_blank"
          >
            <CardContent>
              <Typography className={styles.typographyTitle}>
                Word of the Day
              </Typography>
              <Typography className={styles.typographyDescription}>
                This project does that and that. Is the most incredible project!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  };

  return (
    <Box id="projects" className={styles.boxProjects}>
      <Typography className={styles.typographyProjects}>
        Small things I've done in my spare time.
      </Typography>
      <Grid container spacing={5}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Grid>
    </Box>
  );
};
