import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../style-components/Button";
import styles from "../styles/main.module.scss";
import gsap from "gsap";
import { offTransition } from "./redux/actions/transtition";

export interface MainContainerProps {
  props: any;
}

const MainContainer: React.FC = (props: any) => {
  const transitionDivRef = useRef(null);
  const transitionDivRef2 = useRef(null);
  const dispatch = useDispatch();
  const isTransition = useSelector((state: any) => state.transition.transition);
  console.log(isTransition);
  const onTransition = () => {
    gsap.to(transitionDivRef.current, { height: "100%", ease: "Power.ease" });
  };
  // const stopTransition = () => {
  //   gsap.to(transitionDivRef.current, { height: "0%" });
  // };
  const stopTransition = () => {
    gsap.to(transitionDivRef.current, {
      height: "0%",
      delay: 0.5,
      duration: 1,
      ease: "Power.ease",
    });
  };
  const stopTransition2 = () => {
    gsap.to(transitionDivRef2.current, {
      height: "0%",
      delay: 0.5,
      duration: 1,
      ease: "Power.ease",
    });
  };
  useEffect(() => {
    dispatch(offTransition());
  }, []);
  useEffect(() => {
    if (isTransition) {
      console.log("run");
      onTransition();
    } else {
      stopTransition();
      stopTransition2();
    }
  }, [isTransition]);
  return (
    <>
      <div
        ref={transitionDivRef}
        style={{
          position: "fixed",
          width: "100%",
          background: "#151515",
          height: "0%",
          zIndex: 5000,
          bottom: 0,
        }}
      ></div>
      <div
        ref={transitionDivRef2}
        style={{
          position: "fixed",
          width: "100%",
          background: "#151515",
          height: "100%",
          zIndex: 5000,
          bottom: 0,
        }}
      ></div>
      <div
        className={styles.html}
        style={{
          color: props.theme.fontColor,
          background: props.theme.bg,
          overflow: "hidden",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default MainContainer;
