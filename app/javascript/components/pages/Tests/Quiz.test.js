import React from "react";
import Quiz from "../Quiz";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("when quiz renders", () => {
  it("displays quiz page", () => {
    const quiz = shallow(<Quiz />);
    const headerTag = quiz.find("h1");
    expect(headerTag.length).toEqual(1);
  });
});
