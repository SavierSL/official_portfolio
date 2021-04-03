import React, { useEffect, useRef, useState } from "react";
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
  const [zoomOut, setZoomOut] = useState(false);
  const [zoomOut2, setZoomOut2] = useState(false);
  const tl = new TimelineLite();
  const nameRef = useRef(null);
  const imageRevealFirstRef = useRef(null);
  const imageRevealFirstRef2 = useRef(null);
  const myTitleRef = useRef(null);
  const akaliCImage = useRef(null);
  const sentence1 = useRef(null);
  let imageContainer: any = useRef(null);
  let image: any = useRef(null);
  let imageReveal: any = useRef(null);
  let imageContainer2: any = useRef(null);
  let image2: any = useRef(null);
  let imageReveal2: any = useRef(null);
  //for scrolliing parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  // let imageReveal = CSSRulePlugin.getRule(".image_container:after");

  const interSection = useIntersection(nameRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const interSectionImageReveal = useIntersection(imageRevealFirstRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const interSectionImageReveal2 = useIntersection(imageRevealFirstRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const fadeIn = (element: string) => {
    gsap.to(element, {
      duration: 1,
      opacity: 1,
      y: 0,
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
      y: 30,
      ease: "Power4.out",
    });
  };
  const fadeIn2 = (element: string) => {
    gsap.to(element, {
      delay: 0.9,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut2 = (element: string) => {
    gsap.to(element, {
      delay: 0.9,
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
  };
  const firstImageReveal = (el1: any, el2: any, el3: any, el4: any) => {
    gsap.to(el3, { opacity: 1, scale: 1.3, delay: 0.2, duration: 1.1 });

    tl.to(el2, 1.1, {
      width: "0%",
      ease: Power2.easeInOut,
    }); //.to(el3, 1.4, {
    //   opacity: 1,
    //   scale: 1.3,
    //   ease: Power2.easeOut,
    //   delay: -1.2,
    // }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
    setZoomOut(true);
  };
  const secondImageReveal = (el1: any, el2: any, el3: any, el4: any) => {
    if (!zoomOut) {
      return;
    }
    gsap.to(el3, { opacity: 0, scale: 1, delay: 0.6, duration: 1.1 });

    tl.to(el2, 1.1, {
      width: "100%",
      ease: Power2.easeInOut,
    }); //.to(el3, 1.1, {
    //   scale: 1,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   delay: -1.6,
    // }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
    setZoomOut(false);
  };
  const firstImageReveal2 = (el1: any, el2: any, el3: any) => {
    tl.to(el2, 1.05, {
      width: "0%",
      ease: Power2.easeInOut,
      delay: -1.6,
    }); //.to(el3, 1.4, {
    //   opacity: 1,
    //   scale: 1.3,
    //   ease: Power2.easeOut,
    //   delay: -1.2,
    // }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
    gsap.to(el3, {
      opacity: 1,
      scale: 1.1,
      delay: 0.2,
      duration: 0.5,
    });
    setZoomOut2(true);
  };
  const secondImageReveal2 = (el1: any, el2: any, el3: any) => {
    if (!zoomOut2) {
      return;
    }
    gsap.to(el3, { opacity: 0, scale: 1, delay: 0.2, duration: 0.5 });
    tl.to(el2, 1.1, {
      delay: -1.6,
      width: "100%",
      ease: Power2.easeInOut,
    }); //.to(el3, 1.1, {
    //   scale: 1,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   delay: -1.6,
    // }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
    setZoomOut2(false);
  };
  //FOR THE AKALI IMAGE COLORED
  const onHoverCimage = () => {
    gsap.to(akaliCImage.current, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      transform: `translate(10%)`,
      ease: "Power4.out",
    });
  };
  const onHoverOutCimage = () => {
    gsap.to(akaliCImage.current, {
      opacity: 0,
      scale: 1.1,
      transform: `translate(0%)`,
      ease: "Power4.out",
    });
  };
  useEffect(() => {
    interSectionImageReveal && interSectionImageReveal?.intersectionRatio < 0.2 //not reached
      ? fadeOut2(sentence1.current)
      : fadeIn2(sentence1.current);
  }, [interSection, interSectionImageReveal]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.3 //not reached
      ? fadeOut(myTitleRef.current)
      : fadeIn(myTitleRef.current);
    interSectionImageReveal && interSectionImageReveal?.intersectionRatio < 0.2 //not reached
      ? secondImageReveal(imageContainer, imageReveal, image, sentence1.current)
      : firstImageReveal(imageContainer, imageReveal, image, sentence1.current);
  }, [interSection, interSectionImageReveal, interSectionImageReveal2]);
  useEffect(() => {
    interSectionImageReveal2 &&
    interSectionImageReveal2?.intersectionRatio < 0.3 //not reached
      ? secondImageReveal2(imageContainer2, imageReveal2, image2)
      : firstImageReveal2(imageContainer2, imageReveal2, image2);
  }, [interSectionImageReveal2, interSection]);
  return (
    <>
      {/* we will adjust the height base on the responsiveness 1980 if cp and 1280px if web*/}
      <div style={{ height: "1280px", overflow: "hidden" }}>
        <Wrapper>
          <div className={styles.myName}>
            <h1>I AM XAVIER SAN LORENZO</h1>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <div ref={nameRef} className={styles.nameRef}>
              "
            </div>
            <div className={styles.myTitleContainer}>
              <h1
                ref={myTitleRef}
                className={styles.myTitleContainer_myTitleSkills1}
              >
                FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
              </h1>
              <h1 className={styles.myTitleContainer_myTitleSkills2}>
                FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
              </h1>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <div
                ref={imageRevealFirstRef}
                className={styles.imageRevealFirstRef}
              >
                "
              </div>
              <div className={styles.imageAndGradContainer}>
                <img
                  className={styles.image_container_imgC}
                  onMouseEnter={() => onHoverCimage()}
                  onMouseLeave={() => onHoverOutCimage()}
                  ref={akaliCImage}
                  src="/cRagdoll.png"
                  alt="Picture of the author"
                />
                <img
                  className={styles.image_container_imgW}
                  ref={(el) => (image = el)}
                  src="/wRagdoll.png"
                  alt="Picture of the author"
                />
                <div
                  ref={(el) => (imageContainer = el)}
                  className={styles.image_container}
                >
                  <div
                    ref={(el) => (imageReveal = el)}
                    className={styles.image_container_imageReveal}
                  ></div>
                </div>
                <div className={styles.imageAndGradContainer_grad}>
                  <h1
                    ref={sentence1}
                    style={{
                      fontSize: "1.5rem",
                      opacity: "0",
                      marginTop: "5erm",
                    }}
                  >
                    I graduated as a Bachelor of Science in Entertainment and
                    Multimedia Comh1uting
                  </h1>
                </div>
              </div>
              {/*second set /////////////////////////  */}

              <div className={styles.imageAndGradContainer2}>
                <div
                  ref={imageRevealFirstRef2}
                  className={styles.imageRevealFirstRef2}
                >
                  "
                </div>
                <div className={styles.imageAndGradContainer2_grad}>
                  <h1 className={styles.threeDModeler}>
                    I am 3D modeler and a graphic artist, but recently I focused
                    in learning web development in the year of 2020.
                  </h1>
                </div>

                <div
                  ref={(el) => (imageContainer2 = el)}
                  className={styles.image_container2}
                  style={{ transform: `translateY(${offsetY * 0.1}px)` }}
                >
                  <div
                    ref={(el) => (imageReveal2 = el)}
                    className={styles.image_container2_imageReveal2}
                  ></div>
                </div>

                <img
                  ref={(el) => (image2 = el)}
                  className={styles.image_container2_imgW2}
                  src="/wMecha.png"
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
