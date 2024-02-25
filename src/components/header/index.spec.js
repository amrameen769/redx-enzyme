import { shallow } from "enzyme";
import Header from "./index";
import Logo from "../../assets/logo.png";
import { findByDataTestId } from "../../utils";

const setup = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("<Header />", () => {
  let component;

  beforeEach(() => {
    component = setup();
  });
  it("should render header", () => {
    const wrapper = findByDataTestId(component, "headerComp");
    expect(wrapper.length).toBe(1);
  });

  it("should render logo", () => {
    expect(component.find("img").props().src).toBe(Logo);
  });
});
