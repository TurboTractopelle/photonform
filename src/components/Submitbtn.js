import React, { Component } from "react";

const Submitbtn = props => {
	const disabled = !props.validForm;
	return <input type="submit" value="Submit" disabled={disabled} />;
};

export default Submitbtn;
