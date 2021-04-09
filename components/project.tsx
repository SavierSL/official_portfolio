import React from "react";
import ProjectComponent from "./projectComponent";

export interface ProjectProps {}

const Project: React.SFC<ProjectProps> = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ marginTop: "4rem" }}>
          <ProjectComponent
            title="BLOG IT"
            imageName="blogit"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <ProjectComponent
            title="Q ShareiT"
            imageName="qshare2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <ProjectComponent
            title="Taku"
            imageName="taku2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "4rem" }}>
          <ProjectComponent
            title="Dev"
            imageName="dev"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
      </div>
    </>
  );
};

export default Project;
