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
        <div style={{ marginBottom: "1rem" }}>
          <ProjectComponent
            link="blogit"
            title="BLOG IT"
            imageName="blogit"
            description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            link="qshare"
            title="Q ShareiT"
            imageName="qshare2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            link="qshare"
            title="Taku"
            imageName="taku2"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil enim
          quaerat expedita. Earum, error officiis?"
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <ProjectComponent
            link="qshare"
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
