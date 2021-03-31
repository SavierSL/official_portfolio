import { motion, useAnimation, useViewportScroll } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";

export interface OnScrollProps {}

const OnScroll: React.FC<OnScrollProps> = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const animation = useAnimation();
  const [refContent, inView] = useInView({
    rootMargin: "-200px",
  });
  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start("visible");
    }
  }, [inView, animation]);

  return (
    <>
      <MainContainer {...props}>
        <div style={{ height: "200vh", paddingTop: "30rem" }}>
          <motion.div
            style={{ background: "black" }}
            ref={refContent}
            animate={animation}
            initial="hidden"
            variants={{
              hidden: {
                x: 10,
                opacity: 0,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              },
            }}
          >
            <h1 className={styles.primaryHeading}>Index</h1>
          </motion.div>
        </div>
      </MainContainer>
    </>
  );
};

export default OnScroll;
