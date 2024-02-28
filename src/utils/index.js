import { checkPropTypes } from "prop-types";

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
