import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TestComponent from "./component/testComponent";

Enzyme.configure({ adapter: new Adapter() });


it("shoud be true", () => {
  const warper = shallow(<TestComponent />);
  const text = warper.find("div div");
  expect(text.text()).toBe("hello");
});
it("should button clicked", () => {
  const warper = shallow(<TestComponent />);
  const button = warper.find("button.click");
  button.simulate("click");
  const text = warper.find("div div");
  expect(text.length).toBe(0);
  
});
it("should heading", () => {
    const warper = shallow(<TestComponent />);
    const button = warper.find("h1.hhh").text();
    expect(button).toBe('kk');
  });
it('count',()=>{
    const warper=shallow(<TestComponent />);
    const button = warper.find('button.count');
    const count =warper.find('span').text();
    expect(count).toBe('0');
    button.simulate('click');
    const count1 =warper.find('span').text();
    expect(count1).toBe('1')

    // button.simulate('click');
    // const count2 =warper.find('span').text();
    // expect(count2).toBe('2')
})