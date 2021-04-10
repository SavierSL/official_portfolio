import React, { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import Wrapper from "./wrapper";
import gsap from "gsap";
import Project from "./project";
import styles from "../styles/main.module.scss";

export interface WebDevProps {}
interface data {
  letter: string;
  ref: React.MutableRefObject<undefined>;
  delay: number;
}
const WebDev: React.SFC<WebDevProps> = () => {
  const letter1 = useRef();
  const letter2 = useRef();
  const letter3 = useRef();
  const letter4 = useRef();
  const letter5 = useRef();
  const letter6 = useRef();
  const letter7 = useRef();
  const letter8 = useRef();
  const letter9 = useRef();
  const letter10 = useRef();
  const letter11 = useRef();
  const letter12 = useRef();
  const letter13 = useRef();
  const letter14 = useRef();
  const letter15 = useRef();
  const letter16 = useRef();
  const webDevRef = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const letterData = [
    { letter: "W", ref: letter1, delay: 0 },
    { letter: "E", ref: letter2, delay: 0.1 },
    { letter: "B", ref: letter3, delay: 0.2 },
    { letter: " ", ref: letter4, delay: 0 },
    { letter: "D", ref: letter5, delay: 0.1 },
    { letter: "E", ref: letter6, delay: 0.2 },
    { letter: "V", ref: letter7, delay: 0 },
    { letter: " ", ref: letter8, delay: 0.1 },
    { letter: "P", ref: letter9, delay: 0.2 },
    { letter: "R", ref: letter10, delay: 0.3 },
    { letter: "O", ref: letter11, delay: 0.4 },
    { letter: "J", ref: letter12, delay: 0.5 },
    { letter: "E", ref: letter13, delay: 0.6 },
    { letter: "C", ref: letter14, delay: 0.7 },
    { letter: "T", ref: letter15, delay: 0.8 },
    { letter: "S", ref: letter16, delay: 0.9 },
  ];
  const interSection = useIntersection(webDevRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const fadeInLetters = (element: data[]) => {
    element.map((e) => {
      gsap.to(e.ref.current, {
        opacity: 1,
        x: 0,
        delay: e.delay,
        duration: 0.2,
        ease: "Power2.ease",
      });
    });
  };
  const fadeOutLetters = (element: data[]) => {
    element.map((e) => {
      gsap.to(e.ref.current, {
        opacity: 0,
        x: 30,
        delay: e.delay,
        duration: 0.2,
        ease: "Power2.ease",
      });
    });
  };
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.2 //not reached
      ? fadeOutLetters(letterData)
      : fadeInLetters(letterData);
  }, [interSection]);

  return (
    <>
      <div className={styles.webDevContainer}>
        <Wrapper padding={true}>
          <div
            className={styles.webDevContainer_webDevRef}
            ref={webDevRef}
          ></div>
          <div style={{ display: "flex" }}>
            {" "}
            {letterData.map((letter) => {
              return (
                <h1
                  className={styles.webDevContainer_titleLetter}
                  ref={letter.ref}
                  style={{
                    marginLeft: `${
                      letter.letter === "D" || letter.letter === "P"
                        ? "1rem"
                        : "0rem"
                    }`,
                  }}
                >
                  {letter.letter}
                </h1>
              );
            })}
          </div>
          <Project />
        </Wrapper>
      </div>
    </>
  );
};

export default WebDev;
