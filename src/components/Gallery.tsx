import React, { useRef } from "react";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/Gallery.module.scss";

type Props = {};

const arr = [1, 2, 3, 4, 5];

export const Gallery = (props: Props) => {
  const carousel = useRef() as React.MutableRefObject<HTMLInputElement>;

  const Carousel = () => {
    return (
      <AnimatePresence>
        <motion.div ref={carousel} className={styles.divOuterCarousel}>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 20,
                ease: "linear",
              },
            }}
            className={styles.divInnerCarousel}
          >
            {arr.map((image) => {
              return (
                <motion.div key={image} className={styles.divItem}>
                  <img src={"/img.jpg"} alt={image.toString()} />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <Box className={styles.boxGallery}>
      <Carousel />
    </Box>
  );
};
