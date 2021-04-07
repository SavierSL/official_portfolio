import * as type from "../actions/types";
export const hoveredCursor = () => {
  return {
    type: type.CURSOR_HOVERED_SAGA,
    cursorStyle: "hovered",
  };
};
export const pointerCursor = () => {
  return {
    type: type.CURSOR_POINTER_SAGA,
    cursorStyle: "pointer",
  };
};
