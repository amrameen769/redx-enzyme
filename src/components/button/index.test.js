import React from "react";
import { checkProps } from "../../utils";
import { shallow } from "enzyme";
import SharedButton from ".";

describe("<SharedButton />", () => {
  describe("check proptypes", () => {
    it("should not throw warning", () => {
      const expectedProps = {
        buttonText: "test button",
        emitEvent: () => {},
      };

      const propsError = checkProps(SharedButton, expectedProps);

      expect(propsError).toBeUndefined();
    });
  });

  describe("Render with props", () => {
    let wrapper;
    const mockEmitFn = jest.fn();
    const props = {
      buttonText: "Test",
      emitEvent: mockEmitFn,
    };
    beforeEach(() => {
      wrapper = shallow(<SharedButton {...props} />);
    });

    it("should render button", () => {
      const element = wrapper.find("button");

      expect(element.length).toEqual(1);
    });

    it("should render buttonText", () => {
      const element = wrapper.find("button");

      expect(element.text()).toBe(props.buttonText);
    });

    it("should trigger submitEvent", () => {
      const element = wrapper.find("button");
      element.simulate("click");

      expect(mockEmitFn).toHaveBeenCalled();
    });
  });
});
