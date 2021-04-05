import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/main.module.scss";
import {
  fullStackTitle,
  fullStackLetter,
  firstName,
  letter,
  letterScroll,
  scrollDown,
} from "./animation";
export interface IntroProps {}

const Intro: React.SFC<IntroProps> = () => {
  const animation = useAnimation();
  const [animate, setAnimate] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    //access the body height and assign the height of scroll container

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animate]);

  return (
    <>
      <div style={{ height: "100vh", overflow: "hidden" }}>
        <div style={{ paddingTop: "2rem" }}>
          <motion.div
            initial="initial"
            animate="animate"
            style={{
              textAlign: "center",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <motion.div variants={fullStackTitle} className={styles.fullStack}>
              <motion.span variants={fullStackLetter}>FULL</motion.span>
              <motion.span variants={fullStackLetter}>STACK</motion.span>
              <motion.span
                style={{ color: "violet" }}
                variants={fullStackLetter}
              >
                DEVELOPER
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        <div
          style={{
            paddingTop: "5rem",
            textAlign: "center",
          }}
        >
          <div className={styles.logo}>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: 30,

                  scale: 0.7,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
              className={styles.primaryHeading}
              style={{
                color: "#662D91",
                marginRight: "-8.2rem",
                zIndex: 2,
                transform: `translateX(${offsetY * 0.1}px)`,
                transition: `all 0.5s ease`,
              }}
            >
              X
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: -30,
                  scale: 0.7,
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  },
                },
              }}
              className={styles.primaryHeading}
              style={{
                color: "#92278F",
                marginLeft: `-${offsetY * 0.15}px`,
                transition: `all 0.5s ease`,
              }}
            >
              X
            </motion.h1>
          </div>
          <motion.div
            initial="initial"
            animate="animate"
            className={styles.animate}
          >
            <motion.span variants={firstName} className={styles.first}>
              <motion.span variants={letter}>X</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>V</motion.span>
              <motion.span variants={letter}>I</motion.span>
              <motion.span variants={letter}>E</motion.span>
              <motion.span variants={letter}>R</motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            className={styles.scrollDown}
          >
            <motion.span
              variants={scrollDown}
              className={styles.scrollDown_first}
            >
              <motion.span variants={letterScroll}>S</motion.span>
              <motion.span variants={letterScroll}>c</motion.span>
              <motion.span variants={letterScroll}>r</motion.span>
              <motion.span variants={letterScroll}>o</motion.span>
              <motion.span variants={letterScroll}>l</motion.span>
              <motion.span variants={letterScroll}>l</motion.span>
            </motion.span>
            <motion.span
              variants={scrollDown}
              className={styles.scrollDown_second}
            >
              <motion.span variants={letterScroll}>D</motion.span>
              <motion.span variants={letterScroll}>o</motion.span>
              <motion.span variants={letterScroll}>w</motion.span>
              <motion.span variants={letterScroll}>n</motion.span>
            </motion.span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Intro;
