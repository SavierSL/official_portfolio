import { useEffect, useRef } from "react";

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
  const titleRef = useRef();
  const imageProjectRef = useRef();
  const descriptionRef = useRef();
  useEffect(() => {
    console.log("run");
  }, []);
  return (
    <>
      <div>
        <h1 ref={titleRef}>{title}</h1>
        <img
          ref={imageProjectRef}
          src={`/${imageName}.png`}
          alt=""
          style={{ height: "33rem" }}
        />
        <p ref={descriptionRef} style={{ fontSize: "1.5rem" }}>
          {description}
        </p>
      </div>
    </>
  );
};

export default ProjectComponent;
