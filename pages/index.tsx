import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
import {
  motion,
  useAnimation,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
export interface IndexProps {
  props: any;
}
import useWindowSize from "../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import Intro from "../components/intro";
import {
  ballAnimatin,
  scrollAnimation,
  transition,
} from "../components/animation";
import About from "../components/about";

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

  useEffect(() => {
    //access the body height and assign the height of scroll container
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size.height]);

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling());
  }, []);

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
            <Intro />
            <About />
          </MainContainer>
        </div>
      </div>
      <motion.div initial="initial" animate="animate">
        <motion.div
          style={{ marginTop: `${offsetY / 1.5 + 67.2}px` }}
          variants={ballAnimatin}
          className={styles.ball}
        ></motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
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
