//Actions
export const CREATE_CARD = "CREATE_CARD";
export const UPDATE_ALL_CARDS = "UPDATE_ALL_CARDS";
export const DELETE_CARD = "DELETE_CARD";
export const EDIT_CARD = "EDIT_CARD";

//Action Creators
export const createCard = (cardObject) => ({
  type: CREATE_CARD,
  payload: cardObject,
});

//UPDATE_ALL_CARDS is going yo get the payload from the api and update all thr cards, the value is likely to be an array
export const updateAllCards = (cardsArray) => ({
  type: UPDATE_ALL_CARDS,
  payload: cardsArray,
});

//DELETE_CARD is going to splice(index,1) to remove the card from the state
export const deleteCard = (index) => ({
  type: DELETE_CARD,
  payload: index,
});

//EDIT_CARD is going to modify the content of the index provided and update the state
export const editCard = (index, updatedCard) => ({
  type: EDIT_CARD,
  payload: {
    index,
    updatedCard,
  },
});
