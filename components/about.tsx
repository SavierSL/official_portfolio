import React, { useEffect, useRef } from "react";
import Wrapper from "./wrapper";
import alpha from "../components/images/alpha.png";
import styled from "styled-components";
import Image from "next/image";
import { gsap } from "gsap";
import styles from "../styles/main.module.scss";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
//register the scrolLTrigger
// gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { start } from "node:repl";
import { useIntersection } from "react-use";
import { TimelineLite, Power2 } from "gsap";

export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const tl = new TimelineLite();
  const nameRef = useRef(null);
  const imageRevealFirstRef = useRef(null);
  let imageContainer: any = useRef(null);
  let image: any = useRef(null);
  let imageReveal: any = useRef(null);
  // let imageReveal = CSSRulePlugin.getRule(".image_container:after");

  const interSection = useIntersection(nameRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const interSectionImageReveal = useIntersection(imageRevealFirstRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const fadeIn = (element: string) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: -60,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut = (element: string) => {
    gsap.to(element, {
      duration: 1,
      opacity: 0,
      y: -20,
      ease: "Power4.out",
    });
  };

  const firstImageReveal = (el1: any, el2: any, el3: any) => {
    tl.to(el1, 1, { css: { visibility: "visible" } })
      .to(el2, 1.1, {
        transform: "translateX(30rem)",
        ease: Power2.easeInOut,
      })
      .from(el3, 1.1, { scale: 1.6, ease: Power2.easeOut, delay: -1.6 }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
  };
  const secondImageReveal = (el1: any, el2: any, el3: any) => {
    tl.to(el1, 1, { css: { visibility: "visible" } })
      .to(el2, 1.1, {
        transform: "translateX(0rem)",
        ease: Power2.easeInOut,
      })
      .to(el3, 1.1, { scale: 1.6, ease: Power2.easeOut, delay: -1.6 }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
  };

  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.5 //not reached
      ? fadeOut(".aha")
      : fadeIn(".aha");
    interSection && interSectionImageReveal?.intersectionRatio < 0.5 //not reached
      ? secondImageReveal(imageContainer, imageReveal, image)
      : firstImageReveal(imageContainer, imageReveal, image);
  }, [interSection]);

  return (
    <>
      {" "}
      <div style={{ height: "200vh" }}>
        <Wrapper>
          {" "}
          <div className=".awit">
            <h1 className=".fade">I</h1>
            <h1>AM</h1>
            <h1>XAVIER SAN LORENZO</h1>
          </div>
          <div
            ref={nameRef}
            style={{
              background: "red",
              height: "400px",
              position: "absolute",
              opacity: "0",
            }}
          >
            "
          </div>
          <div
            ref={imageRevealFirstRef}
            style={{
              background: "red",
              height: "400px",
              position: "absolute",
              opacity: "0",
            }}
          >
            "
          </div>
          <h1
            className="aha"
            style={{
              fontSize: "4rem",
              letterSpacing: ".8rem",
              width: "100%",
            }}
          >
            FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
          </h1>
          <div
            ref={(el) => (imageContainer = el)}
            className={styles.image_container}
          >
            <img
              ref={(el) => (image = el)}
              src="/alpha.png"
              alt="Picture of the author"
            />
            <div
              ref={(el) => (imageReveal = el)}
              className={styles.image_container_imageReveal}
            ></div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
