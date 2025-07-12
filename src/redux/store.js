import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cardReducer from "./projectCardSlice/reducers/cardReducer";
import adminAccessReducer from "./adminAccessSlice/reducers/adminAccessReducers.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  card: cardReducer,
  admin: adminAccessReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: { portfolio: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
