//Actions
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";

//Action Creators
export const signIn = (value) => ({
  type: SIGN_IN,
  payload: value,
});

export const signOut = (value) => ({
  type: SIGN_OUT,
  payload: value,
});
