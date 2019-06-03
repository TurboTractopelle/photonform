import React from "react";
import Submitbtn from "./Submitbtn";
import { shallow, mount, render } from "enzyme";
import { findByProp } from "../tests/utils";

describe("Submit btn", () => {
	const setup = props => shallow(<Submitbtn {...props} />);

	it("loads the button", () => {
		const wrapper = setup();
		expect(findByProp(wrapper, "submitbtn")).toBeTruthy();
	});

	it("is disabled if form is not valid", () => {
		const wrapper = setup({ validForm: false });
		expect(findByProp(wrapper, "submitbtn").props().disabled).toBeTruthy();
	});

	it("is enabled if form ist valid", () => {
		const wrapper = setup({ validForm: true });
		expect(findByProp(wrapper, "submitbtn").props().disabled).toBeFalsy();
	});
});
