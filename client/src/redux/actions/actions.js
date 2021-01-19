import { SHOW_LOGIN, HIDE_LOGIN, SHOW_SIGNUP, HIDE_SIGNUP } from "./types";

export const showLogin = () => {
  return {
    type: SHOW_LOGIN,
  };
};
export const hideLogin = () => {
  return {
    type: HIDE_LOGIN,
  };
};
export const showSignup = () => {
  return {
    type: SHOW_SIGNUP,
  };
};
export const hideSignup = () => {
  return {
    type: HIDE_SIGNUP,
  };
};
