import * as React from "react";
import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
const Example = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log(scrollYProgress);
  return (
    <>
      <MainContainer {...props}>
        <div style={{ height: "1000px" }}>
          <motion.div
            style={{
              opacity: scrollYProgress,
            }}
          >
            <div style={{ paddingTop: "10rem" }}>
              <h1 className={styles.primaryHeading}>Index</h1>
            </div>
          </motion.div>
        </div>
      </MainContainer>
    </>
  );
};
export default Example;
