import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hoveredCursor, pointerCursor } from "./redux/actions/cursor";
import NextLink from "next/link";
import { useRouter } from "next/router";
import gsap from "gsap";
import { onTransition } from "./redux/actions/transtition";
import { useIntersection } from "react-use";
import styles from "../styles/main.module.scss";
export interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
  link: string;
}

const ProjectComponent: React.SFC<ProjectComponentProps> = ({
  title,
  description,
  imageName,
  link,
}) => {
  const router = useRouter();
  const clickDetailsRef = useRef();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const imageProjectRef = useRef();
  const descriptionRef = useRef();
  const projectRevealRef = useRef();
  const projectRef = useRef();
  const interSection = useIntersection(projectRevealRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
    //make sure to adjust the height of div that you ref to it to adjust it
  });
  const projectFadeIn = (e: any) => {
    gsap.to(e.current, { opacity: 1 });
  };
  const projectFadeOut = (e: any) => {
    gsap.to(e.current, { opacity: 0 });
  };
  useEffect(() => {
    interSection && interSection?.intersectionRatio < 0.5
      ? projectFadeOut(projectRef)
      : projectFadeIn(projectRef);
  }, [interSection]);
  const onHoverDetails = () => {
    gsap.to(clickDetailsRef.current, {
      opacity: 1,
      duratin: 0.5,

      ease: "Power4.easeInOut",
      transform: `translateY(-3rem)`,
    });
  };
  const onLeaveHoverDetails = () => {
    gsap.to(clickDetailsRef.current, {
      opacity: 0,
      duratin: 0.5,

      ease: "Power4.easeInOut",
      transform: `translateY(3rem)`,
    });
  };
  useEffect(() => {
    console.log("run");
  }, []);
  return (
    <>
      <div className={styles.projectContainer} ref={projectRef}>
        <div
          className={styles.projectContainer_projectRevealRef}
          ref={projectRevealRef}
        ></div>
        <h1 ref={titleRef} style={{ marginBottom: "1rem" }}>
          {title}
        </h1>
        <div className={styles.projectContainer_websiteContainer}>
          <div className={styles.projectContainer_websiteContainer_details}>
            <h1
              className={styles.projectContainer_websiteContainer_detail_click}
              ref={clickDetailsRef}
              style={{
                opacity: 0,
                transform: `translateY(3rem)`,
                background: "darkviolet",
                padding: "1rem",
              }}
            >
              CLICK FOR MORE DETAILS
            </h1>
          </div>

          <img
            className={styles.projectContainer_websiteContainer_image}
            onMouseEnter={() => {
              dispatch(hoveredCursor());
              onHoverDetails();
            }}
            onMouseLeave={() => {
              dispatch(pointerCursor());
              onLeaveHoverDetails();
            }}
            onClick={() => {
              dispatch(pointerCursor());
              dispatch(onTransition());
              setTimeout(() => {
                return router.push("/blogit");
              }, 1000);
            }}
            ref={imageProjectRef}
            src={`/${imageName}.png`}
            alt=""
          />
        </div>

        <p ref={descriptionRef} style={{ fontSize: "1.5rem" }}>
          {description}
        </p>
      </div>
    </>
  );
};

export default ProjectComponent;
