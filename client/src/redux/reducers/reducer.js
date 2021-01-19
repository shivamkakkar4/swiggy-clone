import {
  SHOW_LOGIN,
  HIDE_LOGIN,
  SHOW_SIGNUP,
  HIDE_SIGNUP,
} from "../actions/types";

const initialState = {
  loginvisible: false,
  signupvisible: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN:
      return {
        ...state,
        loginvisible: true,
      };

    case HIDE_LOGIN:
      return {
        ...state,
        loginvisible: false,
      };

    case SHOW_SIGNUP:
      return {
        ...state,
        signupvisible: true,
      };

    case HIDE_SIGNUP:
      return {
        ...state,
        signupvisible: false,
      };

    default:
      return state;
  }
}
