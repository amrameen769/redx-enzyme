import React from "react";
import { shallow } from "enzyme";
import Headline from ".";
import { checkProps } from "../../utils";

const setup = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("<Headline />", () => {
  describe("with props", () => {
    let wrapper;
    const props = {
      header: "Posts",
      desc: "test desc",
    };
    beforeEach(() => {
      wrapper = setup(props);
    });

    it("should render without errors", () => {
      const component = wrapper.find("div");
      expect(component.length).toBe(1);
    });

    it("should render desc", () => {
      const p = wrapper.find("p");
      expect(p.length).toBe(1);
    });

    it("should render title", () => {
      const p = wrapper.find("h1");
      expect(p.length).toBe(1);
    });
  });

  describe("without props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup();
    });

    it("should not render component", () => {
      const component = wrapper.find("h1");
      expect(component.length).toBe(0);
    });
  });

  describe("check proptypes", () => {
    it("should not throw warnings", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Doe",
            lName: "John",
            age: 23,
            onlineStatus: true,
          },
        ],
      };

      const propErr = checkProps(Headline, expectedProps);
      expect(propErr).toBeUndefined();
    });
  });
});
