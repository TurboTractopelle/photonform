import React from "react";

const Input = props => {
	const required = props.data.validation.required && <span className="required">*</span>;
	const valid = props.data.validation.touched
		? props.data.validation.valid
			? "valid"
			: "notValid"
		: null;

	return (
		<div className={["item", props.data.title, valid].join(" ")}>
			<label htmlFor={props.data.title}>
				{props.data.title}
				{required}:{" "}
			</label>
			<input
				type={props.data.type}
				name={props.data.title}
				value={props.data.value}
				onChange={props.onChangeHandler}
			/>
		</div>
	);
};

export default Input;
