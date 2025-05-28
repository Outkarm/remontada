import { CREATE_CARD } from "../actions/cardActions";

//initial state
const initialState = {
  projectName: "",
  summary: "",
  projectInfo: "",
  projectBadges: [],
  image: "",
  sourceLink: "",
  projectLink: "",
};

function cardReducer(state = initialState, action) {
  if (action.type === CREATE_CARD) {
    const {
      projectName,
      summary,
      projectInfo,
      projectBadges,
      image,
      sourceLink,
      projectLink,
    } = action.payload;
    return {
      ...state,
      projectName: projectName,
      summary: summary,
      projectInfo: projectInfo,
      projectBadges: projectBadges,
      image: image,
      sourceLink: sourceLink,
      projectLink: projectLink,
    };
  } else {
    return state;
  }
}

export default cardReducer;
