import rootReducer from "./reducers";
import { thunk } from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const middlewares = [thunk];
export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore,
);
export const store = createStoreWithMiddleware(rootReducer);
