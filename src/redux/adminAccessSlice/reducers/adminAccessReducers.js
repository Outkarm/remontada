import { SIGN_IN, SIGN_OUT } from "../actions/adminAccessActions.js";

// Initial state
const initialState = {
  adminAccess: false,
};

function adminAccessReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        adminAccess: action.payload,
      };

    case SIGN_OUT:
      return {
        ...state,
        adminAccess: action.payload,
      };

    default:
      return state;
  }
}

export default adminAccessReducer;
