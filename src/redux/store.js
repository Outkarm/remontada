import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardReducer from "./projectCardSlice/reducers/cardReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Configuration for Redux Persist
const persistConfig = {
  key: "root", // Key under which the persisted state will be stored in local storage
  storage, // Storage engine (e.g., localStorage)
  //   blacklist: []
};

const rootReducer = combineReducers({ card: cardReducer });

// Create a persisted reducer using Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const store = configureStore({ reducer: { portfolio: persistedReducer } });

// Create a persistor to manage persist/restore
const persistor = persistStore(store);

// Export the configured store and persistor for use in your app
export { store, persistor };
