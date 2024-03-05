import { checkPropTypes } from "prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { middlewares } from "../store";
export const findByDataTestId = (comp, attrId) => {
  const wrapper = comp.find(`[data-test='${attrId}']`);
  return wrapper;
};

export const checkProps = (comp, expectedProps) => {
  const propsErr = checkPropTypes(
    comp.propTypes,
    expectedProps,
    "props",
    comp.name,
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore,
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};
