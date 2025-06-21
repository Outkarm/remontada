import {
  CREATE_CARD,
  UPDATE_ALL_CARDS,
  DELETE_CARD,
  EDIT_CARD,
} from "../actions/cardActions";

// Initial state
const initialState = {
  ProjectCards: [],
};

function cardReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CARD:
      return {
        ...state,
        ProjectCards: [...state.ProjectCards, action.payload],
      };

    case UPDATE_ALL_CARDS:
      return {
        ...state,
        ProjectCards: action.payload,
      };

    case DELETE_CARD:
      return {
        ...state,
        ProjectCards: state.ProjectCards.filter((_, i) => i !== action.payload),
      };

    case EDIT_CARD:
      const updatedCards = [...state.ProjectCards];
      updatedCards[action.payload.index] = action.payload.updatedCard;
      return {
        ...state,
        ProjectCards: updatedCards,
      };

    default:
      return state;
  }
}

export default cardReducer;
