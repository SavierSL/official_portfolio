import * as types from "../actions/types";
export interface cursorStateTypes {
  cursorStyle: string;
}
const initialStateCursor: cursorStateTypes = {
  cursorStyle: "pointer",
};
interface Action {
  type: string;
  payload: string;
}

const cursor = (state = initialStateCursor, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case types.CURSOR_HOVERED: {
      return { ...state, cursorStyle: payload };
    }
    case types.CURSOR_POINTER: {
      return { ...state, cursorStyle: payload };
    }
    default: {
      return state;
    }
  }
};

export default cursor;
