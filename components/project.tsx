import React from "react";
import ProjectComponent from "./projectComponent";

export interface ProjectProps {}

const Project: React.SFC<ProjectProps> = () => {
  return (
    <>
      <div>
        <ProjectComponent
          title="BLOG IT"
          imageName="blogit"
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
        />
      </div>
    </>
  );
};

export default Project;
