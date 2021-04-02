import React from "react";
import Button from "../style-components/Button";
import styles from "../styles/main.module.scss";

export interface MainContainerProps {
  props: any;
}

const MainContainer: React.FC = (props: any) => {
  return (
    <>
      <div
        className={styles.html}
        style={{
          color: props.theme.fontColor,
          background: props.theme.bg,
          overflow: "hidden",
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default MainContainer;
