import React from "react";
import Bucket from "./Bucket";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when bucket renders", () => {
  it("displays bucket results", () => {
    const bucket = shallow(<Bucket />);
    const headerTag = bucket.find("h1");
    expect(headerTag.length).toEqual(1);
  });
});
