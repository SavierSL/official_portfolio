import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
export interface IndexProps {
  props: any;
}
import useWindowSize from "../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -200,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1, //right to left
    },
  },
};
const scrollDown = {
  initial: {
    x: 200,

    transition: {
      delay: 2,
    },
  },
  animate: {
    x: 0,
    transition: {
      delay: 2.5,

      delayChildren: 2.5,
      staggerChildren: 0.04,
      staggerDirection: 1, //right to left
    },
  },
};

const letter = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
const letterScroll = {
  initial: {
    x: -40,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
};

const fullStackTitle = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.5,
      staggerChildren: 0.09,
      staggerDirection: 1, //right to left
    },
  },
};
const fullStackLetter = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 5, ...transition },
  },
};

const scrollAnimation = {
  initial: {
    y: -570,
  },
  animate: {
    y: 0,
    transition: { delay: 1.7, duration: 1, ...transition },
  },
};

const ballAnimatin = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: { delay: 1.4, duration: 0.5, ...transition },
  },
};

const Index: React.FC<IndexProps> = (props) => {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef<any>();
  const [animate, setAnimate] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const animation = useAnimation();

  const [refContent, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-300px",
  });

  useEffect(() => {
    //access the body height and assign the height of scroll container
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

  if (animate) {
    animation.start("animate");
  }

  // Scrolling
  const skewScrolling = () => {
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 7.5;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  return (
    <>
      <div
        ref={app}
        className="app"
        style={{
          overflow: "hidden",
          position: "fixed",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        <div ref={scrollContainer} className="scrollContainer">
          <MainContainer {...props}>
            <div style={{ minHeight: "700vh" }}>
              <div style={{ paddingTop: "2rem" }}>
                <motion.div
                  initial="initial"
                  animate={animation}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <motion.span
                    variants={fullStackTitle}
                    className={styles.fullStack}
                  >
                    <motion.span variants={fullStackLetter}>FULL</motion.span>
                    <motion.span variants={fullStackLetter}>STACK</motion.span>
                    <motion.span
                      style={{ color: "violet" }}
                      variants={fullStackLetter}
                    >
                      DEVELOPER
                    </motion.span>
                  </motion.span>
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
                      marginLeft: `-${offsetY * 0.1}px`,
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
                  animate={animation}
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
          </MainContainer>
        </div>
      </div>
      <motion.div initial="initial" animate={animation}>
        <motion.div
          style={{ marginTop: `${offsetY / 7.5 + 67.2}px` }}
          variants={ballAnimatin}
          className={styles.ball}
        ></motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate={animation}
        className={styles.lineContainer}
      >
        <motion.div
          variants={scrollAnimation}
          className={styles.lineContainer_line}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default Index;
