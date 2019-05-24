import React from "react";

const Input = props => {
	console.log(props);
	return (
		<div className={["item", props.data.title].join(" ")}>
			<label htmlFor={props.data.title}>{props.data.title}: </label>
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
