import React from "react";

const Input = props => {
	const required = props.data.validation.required && <span className="required">*</span>;
	const valid = props.data.validation.touched
		? props.data.validation.valid
			? "valid"
			: "notValid"
		: null;

	let input;
	if (props.data.type === "textarea") {
		input = <textarea name={props.data.title} onChange={props.onChangeHandler} />;
	} else {
		input = (
			<input
				type={props.data.type}
				name={props.data.title}
				value={props.data.value}
				placeholder={props.data.placeholder}
				onChange={props.onChangeHandler}
			/>
		);
	}

	return (
		<div className={["item", props.data.title, valid].join(" ")}>
			<label htmlFor={props.data.title}>
				{props.data.title}
				{required}:{" "}
			</label>
			{input}
		</div>
	);
};

export default Input;
