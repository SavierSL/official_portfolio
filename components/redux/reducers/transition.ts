import * as types from "../actions/types";
interface Action {
  type: string;
}
interface IsTransition {
  transition: boolean;
}
const isTransitionState: IsTransition = {
  transition: false,
};

const transition = (
  state: IsTransition = isTransitionState,
  action: Action
) => {
  const { type } = action;
  switch (type) {
    case types.ON_TRANSITION: {
      return { ...state, transition: true };
    }
    case types.OFF_TRANSITION: {
      return { ...state, transition: false };
    }
    default: {
      return state;
    }
  }
};
export default transition;
