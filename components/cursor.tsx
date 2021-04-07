import React, { useEffect, useState } from "react";
import { Cursor } from "../style-components/cursor";
import { useGlobalStateContext } from "../components/Context/globalContext";
import { useSelector } from "react-redux";
import { cursorStateTypes } from "./redux/reducers/cursor";
const CustomCursor = () => {
  const cursorStyle = useSelector((state: any) => state.cursor.cursorStyle);
  const [mousePosition, setMousePoisition] = useState({
    x: 400,
    y: 400,
  });
  console.log(cursorStyle);
  const onMouseMove = (event: any) => {
    const { pageX: x, pageY: y } = event;
    setMousePoisition({ x, y });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor
        className={cursorStyle === "pointer" ? "pointer" : "hovered"}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      ></Cursor>
    </>
  );
};

export default CustomCursor;
