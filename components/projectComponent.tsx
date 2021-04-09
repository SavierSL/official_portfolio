import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { hoveredCursor, pointerCursor } from "./redux/actions/cursor";
import gsap from "gsap";
export interface ProjectComponentProps {
  title: string;
  description: string;
  imageName: string;
}

const ProjectComponent: React.SFC<ProjectComponentProps> = ({
  title,
  description,
  imageName,
}) => {
  const clickDetailsRef = useRef();
  const dispatch = useDispatch();
  const titleRef = useRef();
  const imageProjectRef = useRef();
  const descriptionRef = useRef();

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
      <div style={{ marginTop: "1rem", textAlign: "left" }}>
        <div
          style={{
            position: "absolute",

            width: "1rem",
            height: "30rem",
          }}
        ></div>
        <h1 ref={titleRef}>{title}</h1>
        <div
          style={{
            height: "38rem",
            overflow: "hidden",

            position: "relative",
          }}
        >
          <div
            style={{
              height: "5rem",
              width: "100%",
              position: "absolute",
              zIndex: 3001,
              bottom: 0,
              textAlign: "center",
              transform: `translateY(3rem)`,
            }}
          >
            <h1
              ref={clickDetailsRef}
              style={{ opacity: 0, transform: `translateY(3rem)` }}
            >
              CLICK FOR MORE DETAILS
            </h1>
          </div>
          <img
            onMouseEnter={() => {
              dispatch(hoveredCursor());
              onHoverDetails();
            }}
            onMouseLeave={() => {
              dispatch(pointerCursor());
              onLeaveHoverDetails();
            }}
            ref={imageProjectRef}
            src={`/${imageName}.png`}
            alt=""
            style={{
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              overflow: "hidden",
            }}
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
