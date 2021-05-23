import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case ACTIONS.ADD_AUTH_DATA:
      return {
        ...state,
        auth: action.payload,
      };

    case ACTIONS.REMOVE_AUTH_DATA:
      return {
        ...state,
        auth: action.payload,
      };

    case ACTIONS.USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
export default reducers;
