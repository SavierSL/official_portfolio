import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { off } from "node:process";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainContainer from "../components/mainContainer";
import styles from "../styles/main.module.scss";

export interface ParallaxProps {}

const Parallax: React.FC<ParallaxProps> = (props) => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <MainContainer {...props}>
        <div style={{ height: "100vh", paddingTop: "30rem" }}>
          <div
            style={{
              transform: `translateX(${offsetY * 0.1}px)`,
              opacity: offsetY / 100,
            }}
          >
            {" "}
            <h1>AWIT</h1>
          </div>
        </div>
        <div style={{ height: "100vh", paddingTop: "10rem" }}>
          <div
            style={{
              transform: `translateX(${(offsetY * 0.1) / 2}px)`,
              opacity: offsetY * 0.02,
            }}
          >
            {" "}
            <h1>AWIT</h1>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Parallax;
