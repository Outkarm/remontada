//Actions
export const CREATE_CARD = "CREATE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const DELETE_CARD = "DELETE_CARD";

//Action Creators
export const createCard = (
  projectName,
  summary,
  projectInfo,
  projectBadges,
  image,
  sourceLink,
  projectLink
) => ({
  type: CREATE_CARD,
  payload: {
    projectName,
    summary,
    projectInfo,
    projectBadges,
    image,
    sourceLink,
    projectLink,
  },
});
