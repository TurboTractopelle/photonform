import React from "react";
import Form from "./Form";
import { shallow } from "enzyme";
import { findByProp } from "../tests/utils";

describe("Form", () => {
	const setup = props => shallow(<Form {...props} />);

	it("loads the form", () => {
		const wrapper = setup();
		expect(findByProp(wrapper, "formWrapper").find("form")).toBeTruthy();
	});
});
