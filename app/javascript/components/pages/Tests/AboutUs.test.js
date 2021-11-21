import React from "react";
import AboutUs from "../AboutUs";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when about us renders", () => {
  it("displays creator profile info", () => {
    const aboutus = shallow(<AboutUs />);
    const headerTag = aboutus.find("h1");
    expect(headerTag.length).toEqual(1);
  });
});
