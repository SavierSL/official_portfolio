import React from "react";
import Wrapper from "./wrapper";
import alpha from "../components/images/alpha.png";
import styled from "styled-components";
import Image from "next/image";
export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      {" "}
      <div style={{ height: "200vh" }}>
        <Wrapper>
          {" "}
          <div>
            <h1>I</h1>
            <h1>AM</h1>
            <h1>XAVIER SAN LORENZO</h1>
          </div>
          <h1
            style={{ fontSize: "4rem", letterSpacing: ".8rem", width: "100%" }}
          >
            FULL STACK DEV - 3D ARTIST - GRAPHIC ARTIST
          </h1>
          <Image
            src="/alpha.png"
            alt="Picture of the author"
            width={420}
            height={300}
          />
        </Wrapper>
      </div>
    </>
  );
};

export default About;
