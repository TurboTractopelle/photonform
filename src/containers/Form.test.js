import React from "react";
import Form from "./Form";
import Posted from "../components/Posted";
import { shallow } from "enzyme";
import { findByProp } from "../tests/utils";

describe("Form", () => {
	const setup = props => shallow(<Form {...props} />);

	it("displays the form on startup", () => {
		const wrapper = setup();
		expect(findByProp(wrapper, "formWrapper").find("form")).toBeTruthy();
	});

	it("display the message while form has been submitted", () => {
		const wrapper = setup();
		wrapper.setState({ formSubmission: true });
		expect(findByProp(wrapper, "formWrapper").find(<Posted />)).toBeTruthy();
	});
});
