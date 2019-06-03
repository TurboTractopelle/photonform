import React from "react";

const Submitbtn = props => {
	const disabled = !props.validForm;
	return (
		<button disabled={disabled} datatest="submitbtn" onClick={props.onSubmitHandler}>
			Submit
		</button>
	);
};

export default Submitbtn;
