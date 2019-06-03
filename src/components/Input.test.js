import React from "react";
import Input from "./Input";
import { shallow } from "enzyme";
import { findByProp } from "../tests/utils";

describe("Input", () => {
	const setup = props => shallow(<Input {...props} />);

	describe("displays input with passing params", () => {
		const cfg = {
			name: "firstname",
			title: "First name",
			type: "text",
			value: "some test",
			placeholder: "Enter your first name",
			validation: {
				required: true,
				valid: false,
				touched: false
			}
		};

		const wrapper = setup({ data: cfg });
		it("has correct type", () => {
			expect(findByProp(wrapper, "input").props().type).toBe("text");
		});

		it("displays passed name", () => {
			expect(findByProp(wrapper, "input").props().name).toBe("First name");
		});

		it("displays passed value", () => {
			expect(findByProp(wrapper, "input").props().value).toBe("some test");
		});
		it("displays passed placeholder", () => {
			expect(findByProp(wrapper, "input").props().placeholder).toBe("Enter your first name");
		});

		it("displays required if required param", () => {
			expect(findByProp(wrapper, "inputWrapper").find("span.required")).toBeTruthy();
		});
	});
});
