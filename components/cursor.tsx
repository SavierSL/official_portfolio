import React, { useEffect, useRef, useState } from "react";
import { Cursor } from "../style-components/cursor";
import { useGlobalStateContext } from "../components/Context/globalContext";
import { useSelector } from "react-redux";
import { cursorStateTypes } from "./redux/reducers/cursor";
import gsap from "gsap";
interface CustomCursorProps {
  data: {
    ease: number;
    current: number;
    previous: number;
    rounded: number;
  };
}
const CustomCursor: React.FC<CustomCursorProps> = ({ data }) => {
  const cursorStyle = useSelector((state: any) => state.cursor.cursorStyle);
  const [mousePosition, setMousePoisition] = useState({
    x: 400,
    y: 400,
  });
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const onMouseMove = (event: any) => {
    const { pageX: x, pageY: y } = event;
    setMousePoisition({ x, y });
  };
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <Cursor
        className={cursorStyle === "pointer" ? "pointer" : "hovered"}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></Cursor>
    </>
  );
};

export default CustomCursor;
