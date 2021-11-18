import React from "react";
import NotFound from "./NotFound";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when not found renders", () => {
  it("displays error message", () => {
    const notfound = shallow(<NotFound />);
    const headerTag = notfound.find("h1");
    expect(headerTag.length).toEqual(1);
  });     
});