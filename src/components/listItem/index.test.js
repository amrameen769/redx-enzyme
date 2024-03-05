import React from "react";
import { shallow } from "enzyme";
import ListItem from ".";

describe("<ListItem />", () => {
  describe("component should render", () => {
    let wrapper;
    let props;
    beforeEach(() => {
      props = {
        title: "Test A",
        desc: "Test Desc A",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("render without errors", () => {
      const component = wrapper.find(".listItemComponent");

      expect(component.exists()).toBe(true);
    });

    it("renders title", () => {
      const component = wrapper.find("h3");
      expect(component.text()).toEqual(props.title);
    });

    it("renders desc", () => {
      const component = wrapper.find("p");
      expect(component.text()).toEqual(props.desc);
    });
  });

  describe("should not render", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<ListItem />);
    });

    it("should not render if no props", () => {
      expect(wrapper.find(".listItemComponent").exists()).not.toBe(true);
    });
  });
});
