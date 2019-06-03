import React from "react";

const Submitbtn = props => {
	const disabled = !props.validForm;
	return <input type="submit" value="Submit" disabled={disabled} dataTest="submitbtn" />;
};

export default Submitbtn;
