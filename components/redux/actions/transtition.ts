import * as type from "../actions/types";
export const onTransition = () => {
  return { type: type.ON_TRANSITION_SAGA };
};
export const offTransition = () => {
  return { type: type.OFF_TRANSITION_SAGA };
};
