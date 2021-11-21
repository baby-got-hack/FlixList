import React from "react";
import Header from "../Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import mockPic from "../mockFile";

Enzyme.configure({ adapter: new Adapter() });

describe(" when header renders", () => {
  it("displays two a tags", () => {
    const header = shallow(<Header />);
    const aTags = header.find("a");
    expect(aTags.length).toEqual(2);
  });

  it("displays an image", () => {
    const logo = shallow(<Header />);
    expect(logo.find("img").prop("src")).toEqual(mockPic);
  });
});
