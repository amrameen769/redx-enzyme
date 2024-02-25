export const findByDataTestId = (comp, attrId) => {
  const wrapper = comp.find(`[data-test='${attrId}']`);
  return wrapper;
};
