import React, { useEffect, useRef, useState } from "react";
import Wrapper from "./wrapper";
import alpha from "../components/images/alpha.png";
import styled from "styled-components";
import Image from "next/image";
import gsap from "gsap";
import styles from "../styles/main.module.scss";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);
//register the scrolLTrigger
// gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { start } from "node:repl";
import { useIntersection } from "react-use";
import { TimelineLite, Power2 } from "gsap";
import useWindowDimensions from "./getWindow";
import {
  hoveredCursor,
  pointerCursor,
} from "../components/redux/actions/cursor";
import { useDispatch } from "react-redux";

const About: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [zoomOut, setZoomOut] = useState(false);
  const [zoomOut2, setZoomOut2] = useState(false);
  const [fadeIn2State, setFadeIn2State] = useState(false);
  const [fadeIn22State, setFadeIn22State] = useState(false);
  const tl = new TimelineLite();
  const nameRef = useRef(null);
  const imageRevealFirstRef = useRef(null);
  const imageRevealFirstRef2 = useRef(null);
  const myTitleRef = useRef(null);
  const akaliCImage = useRef(null);
  const sentence1 = useRef(null);
  const sentence2 = useRef(null);
  const sentence3 = useRef(null);
  const sentence21 = useRef(null);
  const sentence22 = useRef(null);
  const sentence23 = useRef(null);
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
  const fadeIn2 = (element1: string, element2: string, element3: string) => {
    if (!fadeIn2State) {
      return;
    }
    gsap.to(element1, {
      delay: 0.4,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(element2, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(element3, {
      delay: 0.6,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut2 = (element1: string, element2: string, element3: string) => {
    setFadeIn2State(true);
    gsap.to(element1, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
    gsap.to(element2, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
    gsap.to(element3, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
  };
  const fadeIn3 = (element1: string, element2: string, element3: string) => {
    if (!fadeIn22State) {
      return;
    }
    gsap.to(element1, {
      delay: 0.4,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(element2, {
      delay: 0.5,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(element3, {
      delay: 0.6,
      duration: 1,
      opacity: 1,
      x: 0,
      ease: "Power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };
  const fadeOut3 = (element1: string, element2: string, element3: string) => {
    setFadeIn22State(true);
    gsap.to(element1, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
    gsap.to(element2, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
    gsap.to(element3, {
      duration: 1,
      opacity: 0,
      x: -50,
      ease: "Power4.out",
    });
  };
  const firstImageReveal = (el1: any, el2: any, el3: any, el4: any) => {
    gsap.to(el3, { opacity: 1, scale: 1.3, delay: 0.2, duration: 1.1 });

    tl.to(el2, 0.5, {
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
    if (!zoomOut2) {
      return;
    }
    fadeIn3(sentence21.current, sentence22.current, sentence23.current);
    tl.to(el2, 1, {
      width: "0%",
      ease: Power2.easeInOut,
      delay: -0.4,
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
  };
  const secondImageReveal2 = (el1: any, el2: any, el3: any) => {
    setZoomOut2(true);
    fadeOut3(sentence21.current, sentence22.current, sentence23.current);
    gsap.to(el3, { opacity: 0, scale: 1, delay: 0.2, duration: 0.5 });
    tl.to(el2, 1.1, {
      delay: -0.4,
      width: "100%",
      ease: Power2.easeInOut,
    }); //.to(el3, 1.1, {
    //   scale: 1,
    //   opacity: 0,
    //   ease: Power2.easeOut,
    //   delay: -1.6,
    // }); //to is to go to 1.6 scale //from is to go to normal from 1.6 scale
  };
  //FOR THE AKALI IMAGE COLORED
  const onHoverCimage = () => {
    dispatch(hoveredCursor());
    gsap.to(akaliCImage.current, {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      transform: `translate(10%)`,
      ease: "Power4.out",
    });
  };
  const onHoverOutCimage = () => {
    dispatch(pointerCursor());
    gsap.to(akaliCImage.current, {
      opacity: 0,
      scale: 1.1,
      transform: `translate(0%)`,
      ease: "Power4.out",
    });
  };
  useEffect(() => {
    interSectionImageReveal && interSectionImageReveal?.intersectionRatio < 0.2 //not reached
      ? fadeOut2(sentence1.current, sentence2.current, sentence3.current)
      : fadeIn2(sentence1.current, sentence2.current, sentence3.current);
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
      <div
        style={{
          height: "100%",
          overflow: "hidden",

          paddingBottom: "12rem",
        }}
      >
        <Wrapper>
          <div className={styles.myName}>
            <h1>I AM XAVIER SAN LORENZO</h1>
          </div>
          <div>
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
                  onMouseEnter={() => {
                    onHoverCimage();
                  }}
                  onMouseLeave={() => {
                    onHoverOutCimage();
                  }}
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
                  style={{
                    transform: `translateX(${offsetY * 0.02 - 20}px)`,
                    backgroundImage: "/dots.png",
                  }}
                >
                  <img src="/dots.png" alt="" style={{ opacity: "70%" }} />
                  <div
                    ref={(el) => (imageReveal = el)}
                    className={styles.image_container_imageReveal}
                  ></div>
                </div>
                <div
                  className={styles.imageAndGradContainer_grad}
                  style={{
                    transform: `${
                      useWindowDimensions().width < 700
                        ? ""
                        : `translateX(-${offsetY * 0.05}px`
                    }`,
                  }}
                >
                  <h1
                    ref={sentence1}
                    style={{
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    I graduated as a Bachelor
                  </h1>
                  <h1
                    ref={sentence2}
                    style={{
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    Science in Entertainment and
                  </h1>
                  <h1
                    ref={sentence3}
                    style={{
                      fontSize: "1.5rem",
                      opacity: "0",
                    }}
                  >
                    Multimedia Computing
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
                <div
                  className={styles.imageAndGradContainer2_grad}
                  style={{ zIndex: 5000 }}
                >
                  <div
                    className={styles.sentence2}
                    style={{
                      marginTop:
                        useWindowDimensions().width < 700 ? "" : "6rem",
                      transform: `${
                        useWindowDimensions().width < 700
                          ? ""
                          : `translateX(${offsetY * 0.05}px`
                      }`,
                      transition: "all 1s ease",
                    }}
                  >
                    <h1 ref={sentence21}>
                      I am 3D modeler and a graphic artist,
                    </h1>
                    <h1 ref={sentence22}>but recently I focused </h1>
                    <h1 ref={sentence23}>web development.</h1>
                  </div>
                </div>

                <div
                  ref={(el) => (imageContainer2 = el)}
                  className={styles.image_container2}
                  style={{ transform: `translateY(${offsetY * 0.05}px)` }}
                >
                  <img src="/dots.png" alt="" style={{ opacity: "70%" }} />
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
              <img
                style={{
                  height: "35rem",
                  marginTop: "-5rem",
                  marginLeft: "-5rem",
                  position: "absolute",
                }}
                src="/career.png"
                alt="Picture of the author"
              />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default About;
