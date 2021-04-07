import { addScaleCorrection } from "framer-motion";
import React from "react";
import { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext(null);
const GlobalDispatchContext = createContext(null);

//Reducer

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "HOVERED": {
      return { ...state, cursorStyle: action.cursorStyle };
    }
    case "POINTER": {
      return { ...state, cursorStyle: action.cursorStyle };
    }
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, {
    cursorStyle: "pointer",
  });
  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

//custom Hooks

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
export const useGlobalStateContext = () => useContext(GlobalStateContext);
