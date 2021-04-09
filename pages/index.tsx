import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";
import {
  AnimatePresence,
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
import GraphicArtist from "../components/graphicArtist";
import WebDev from "../components/webDev";
import gsap from "gsap";
import useWindowDimensions from "../components/getWindow";
import CustomCursor from "../components/cursor";
import {
  GlobalProvider,
  useGlobalDispatchContext,
} from "../components/Context/globalContext";
import { useDispatch, useSelector } from "react-redux";
import { isResSent } from "next/dist/next-server/lib/utils";
import { offTransition } from "../components/redux/actions/transtition";

const Index: React.FC<IndexProps> = (props) => {
  const size = useWindowSize();
  const app = useRef();
  const scrollContainer = useRef<any>();
  const [animate, setAnimate] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const mainBg = useRef();
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const animation = useAnimation();
  const dispatch = useDispatch();
  const [showIndex, setShowIndex] = useState(true);

  useEffect(() => {
    //access the body height and assign the height of scroll container
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height * 3.15 //adjust here to fix scroling height
    }px`;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size.height]);
  console.log(useWindowDimensions());
  useEffect(() => {
    dispatch(offTransition());
    setTimeout(() => {
      setShowIndex(false);
    }, 3000);

    gsap.to(mainBg.current, {
      opacity: "30%",

      duration: 0.5,
      delay: 3.6,
      scale: 1,
    });
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
    const skew = velocity * 1.5;

    //Assign skew and smooth scrolling to the scroll container
    if (scrollContainer.current?.style) {
      scrollContainer.current.style.transform = `translate3d(0, -${
        data.rounded * 0.4
      }px, 0) skewY(${skew}deg)`;
    }

    //loop vai raf
    requestAnimationFrame(() => skewScrolling());
  };

  // const onCursor = (style: string) => {
  //   if (style === "hovered") {
  //     dispatch({ type: "HOVERED", cursorStyle: "hovered" });
  //   } else {
  //     dispatch({ type: "POINTER", cursorStyle: "pointer" });
  //   }
  // };

  return (
    <>
      {" "}
      <MainContainer {...props}>
        <motion.div exit={{ opacity: 0 }}>
          <CustomCursor data={data} />
          <motion.div initial="initial" animate="animate">
            <motion.div
              style={{
                marginTop: `${offsetY / 18 + 67.2}px`,
                transition: `all 0.5s ease`,
              }}
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

          <img
            ref={mainBg}
            src="/wires.png"
            alt="aha"
            style={{
              top: "-30rem",
              overflow: "hidden",
              position: "fixed",
              zIndex: 1,
              opacity: "0%",
              width: "60vw",
              marginTop: `${offsetY / 450}rem`,
              left: 0,
              right: 0,
              transition: "all 1s ease",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />

          <div
            ref={app}
            className="app"
            style={{
              zIndex: 2,
              overflow: "hidden",
              position: "fixed",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
            }}
          >
            <div
              ref={scrollContainer}
              className="scrollContainer"
              style={{ zIndex: 2 }}
            >
              <Intro />
              <About />
              <WebDev />
            </div>{" "}
          </div>
        </motion.div>
      </MainContainer>
    </>
  );
};

export default Index;
