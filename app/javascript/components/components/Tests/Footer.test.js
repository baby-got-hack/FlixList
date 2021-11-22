import React from "react";
import Footer from "../Footer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when footer renders", () => {
  it("displays two NavLinks", () => {
    const footer = shallow(<Footer />);
    const navlinks = footer.find("NavLink");

    expect(navlinks.length).toEqual(2);
  });
  it("displays an a tag", () => {
    const footer = shallow(<Footer />);
    const aTag = footer.find("a");

    expect(aTag.length).toEqual(1);
  });
});
