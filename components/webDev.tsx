import React from "react";
import Wrapper from "./wrapper";

export interface WebDevProps {}

const WebDev: React.SFC<WebDevProps> = () => (
  <>
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <Wrapper>
        <h1
          style={{
            fontFamily: "Train One",
            fontSize: "5rem",
            fontWeight: 10,
          }}
        >
          WEB DEV PROJECTS
        </h1>
        <h1
          style={{
            fontSize: "5rem",
            fontWeight: 10,
          }}
        >
          WEB DEV PROJECTS
        </h1>
      </Wrapper>
    </div>
  </>
);

export default WebDev;
