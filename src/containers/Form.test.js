import React from "react";
import Form from "./Form";
import Posted from "../components/Posted";
import Input from "../components/Input";
import { shallow } from "enzyme";
import { findByProp } from "../tests/utils";

describe("Form display", () => {
	const setup = props => shallow(<Form {...props} />);

	it("displays the form on startup", () => {
		const wrapper = setup();
		expect(findByProp(wrapper, "formWrapper").find("form")).toBeTruthy();
	});

	it("display the message when form has been submitted", () => {
		const wrapper = setup();
		wrapper.setState({ formSubmission: true });
		expect(findByProp(wrapper, "formWrapper").find(<Posted />)).toBeTruthy();
	});

	it("displays the inputs", () => {
		const wrapper = setup();
		wrapper.setState({
			form: {
				firstname: {
					name: "firstname",
					title: "First name",
					type: "text",
					value: "",
					placeholder: "Enter your first name",
					validation: {
						required: true,
						valid: false,
						touched: false
					}
				}
			}
		});
		console.log(findByProp(wrapper, "formWrapper").debug());
		expect(findByProp(wrapper, "formWrapper").find(Input)).toBeTruthy();
	});
});
