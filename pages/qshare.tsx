import React from "react";
import CustomCursor from "../components/cursor";
import MainContainer from "../components/mainContainer";

export interface QshareProps {}

const Qshare: React.FC<QshareProps> = (props) => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  return (
    <>
      <MainContainer {...props}>
        <CustomCursor data={data} />
        <h1>QSHARE</h1>
      </MainContainer>
    </>
  );
};

export default Qshare;
