import React from "react";
import Favorites from "./Favorites";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when favorites renders", () => {
  it("displays favorite content", () => {
    const favorites = shallow(<Favorites />);
    const headerTag = favorites.find("h1");
    expect(headerTag.length).toEqual(1);
  });
});